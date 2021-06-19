// Credit https://codepen.io/brianmearns/pen/YVjZWw
const getTextSegments = (element: HTMLDivElement | ChildNode | Node) => {
  const textSegments: Array<{
    text: string | null
    node: Node
  }> = []
  Array.from(element.childNodes).forEach((node) => {
    switch (node.nodeType) {
      case Node.TEXT_NODE:
        textSegments.push({ text: node.nodeValue, node })
        break

      case Node.ELEMENT_NODE:
        if (node.nodeName === 'BR') {
          textSegments.splice(textSegments.length, 0, { text: '\n', node })
        } else
          textSegments.splice(textSegments.length, 0, ...getTextSegments(node))
        break

      default:
        throw new Error(`Unexpected node type: ${node.nodeType}`)
    }
  })
  return textSegments
}

function restoreSelection(
  absoluteAnchorIndex: number,
  absoluteFocusIndex: number,
  editor: Node
) {
  const sel = window.getSelection()
  const textSegments = getTextSegments(editor)
  let anchorNode = editor
  let anchorIndex = 0
  let focusNode = editor
  let focusIndex = 0
  let currentIndex = 0
  textSegments.forEach(({ text, node }) => {
    if (text) {
      const startIndexOfNode = currentIndex
      const endIndexOfNode = startIndexOfNode + text.length
      if (
        startIndexOfNode <= absoluteAnchorIndex &&
        absoluteAnchorIndex <= endIndexOfNode
      ) {
        anchorNode = node
        anchorIndex = absoluteAnchorIndex - startIndexOfNode
      }
      if (
        startIndexOfNode <= absoluteFocusIndex &&
        absoluteFocusIndex <= endIndexOfNode
      ) {
        focusNode = node
        focusIndex = absoluteFocusIndex - startIndexOfNode
      }
      currentIndex += text.length
    }
  })
  if (sel) {
    if (anchorNode.nodeName === 'BR')
      sel.setBaseAndExtent(anchorNode, 0, focusNode, 0)
    else sel.setBaseAndExtent(anchorNode, anchorIndex, focusNode, focusIndex)
  }
}
function insertTextAtCursor(text: string) {
  const sel = window.getSelection()
  if (sel) {
    let range = sel.getRangeAt(0)
    range.deleteContents()
    if (range.commonAncestorContainer.nodeName === 'DIV')
      throw new Error('Wrong element')
    const node = document.createTextNode(text)
    range.insertNode(node)
    range.collapse(false)
    sel.removeAllRanges()
    sel.addRange(range)
  }
}

export { restoreSelection, getTextSegments, insertTextAtCursor }
