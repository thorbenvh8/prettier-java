"use strict";
const { concat, formatComment } = require("./printers/prettier-builder");
const {
  breakParent,
  hardline,
  lineSuffix,
  lineSuffixBoundary
} = require("prettier").doc.builders;

function processComments(ctx, value) {
  if (!Array.isArray(ctx)) {
    return processComentsOnNode(ctx, value);
  }

  if (ctx.length === 1) {
    return processComentsOnNode(ctx[0], value);
  }

  return concat(
    ctx.map(elt => {
      return processComentsOnNode(elt, value);
    })
  );
}

function processComentsOnNode(node, value) {
  const arr = [];
  if (Object.prototype.hasOwnProperty.call(node, "leadingComments")) {
    node.leadingComments.forEach(comment => {
      if (comment.endLine !== node.location.startLine) {
        arr.push(concat(formatComment(comment)));
        arr.push(hardline);
      } else {
        arr.push(concat(formatComment(comment)));
      }
    });
  }

  arr.push(value);

  let previousEndLine = node.location.endLine;
  if (Object.prototype.hasOwnProperty.call(node, "trailingComments")) {
    node.trailingComments.forEach((comment, idx) => {
      let separator = "";

      if (comment.startLine !== previousEndLine) {
        arr.push(hardline);
      } else if (value !== "" && idx === 0) {
        separator = " ";
      }

      if (comment.tokenType.name === "LineComment") {
        arr.push(
          lineSuffix(
            concat([separator, concat(formatComment(comment)), breakParent])
          ),
          lineSuffixBoundary
        );
      } else {
        arr.push(concat(formatComment(comment)));
      }

      previousEndLine = comment.endLine;
    });
  }
  return arr.length === 1 ? value : concat(arr);
}

module.exports = {
  processComments
};
