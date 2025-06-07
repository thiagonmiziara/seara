import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import React from "react";

interface RichTextRendererProps {
  document: Document | null | undefined;
}

const RichTextRenderer: React.FC<RichTextRendererProps> = ({ document }) => {
  if (!document) {
    return null;
  }

  return <>{documentToReactComponents(document)}</>;
};

export default RichTextRenderer;
