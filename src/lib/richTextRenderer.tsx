import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document, BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import React from "react";
import Image from "next/image";

interface RichTextRendererProps {
  document: Document | null | undefined;
}

const RichTextRenderer: React.FC<RichTextRendererProps> = ({ document }) => {
  if (!document || !document.content) {
    return null;
  }

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
        <p className='mb-4'>{children}</p>
      ),
      [BLOCKS.HEADING_1]: (node: any, children: React.ReactNode) => (
        <h1 className='text-4xl font-bold mb-4'>{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => (
        <h2 className='text-3xl font-bold mb-3'>{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => (
        <h3 className='text-2xl font-bold mb-2'>{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node: any, children: React.ReactNode) => (
        <h4 className='text-xl font-bold mb-2'>{children}</h4>
      ),
      [BLOCKS.HEADING_5]: (node: any, children: React.ReactNode) => (
        <h5 className='text-lg font-bold mb-1'>{children}</h5>
      ),
      [BLOCKS.HEADING_6]: (node: any, children: React.ReactNode) => (
        <h6 className='text-base font-bold mb-1'>{children}</h6>
      ),
      [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => (
        <ul className='list-disc ml-6 mb-4'>{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => (
        <ol className='list-decimal ml-6 mb-4'>{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => (
        <li>{children}</li>
      ),
      [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
        <a
          href={node.data.uri}
          className='text-blue-600 hover:underline'
          target='_blank'
          rel='noopener noreferrer'
        >
          {children}
        </a>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        const { file, description } = node.data.target.fields;
        const imageUrl = file?.url ? `https:${file.url}` : null;
        const width = file?.details?.image?.width;
        const height = file?.details?.image?.height;

        if (imageUrl && width && height) {
          return (
            <div className='my-4 flex justify-center'>
              <Image
                src={imageUrl}
                alt={description || "Embedded asset"}
                width={width}
                height={height}
                className='max-w-full h-auto rounded-lg shadow-md'
              />
            </div>
          );
        }
        return null;
      },
    },
    renderMark: {
      [MARKS.BOLD]: (text: React.ReactNode) => (
        <strong className='font-bold'>{text}</strong>
      ),
      [MARKS.ITALIC]: (text: React.ReactNode) => (
        <em className='italic'>{text}</em>
      ),
      [MARKS.UNDERLINE]: (text: React.ReactNode) => (
        <u className='underline'>{text}</u>
      ),
    },
  };

  return <>{documentToReactComponents(document, options)}</>;
};

export default RichTextRenderer;
