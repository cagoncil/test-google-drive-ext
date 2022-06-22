const editorContainer = document.getElementById('docs-editor-container');
const editor = document.getElementById('docs-editor');
const appview = document.getElementById('kix-appview');
const appviewEditorContainer = document.getElementsByClassName('kix-appview-editor-container')[0];
const appviewEditor = document.getElementsByClassName('kix-appview-editor')[0];
const appviewDiv = appviewEditor.firstChild;
const whitePage = appviewDiv.children[1];
const pages = Array.from(document.getElementsByTagName('canvas'));
const navLinks = Array.from(document.getElementsByClassName('navigation-item'));
const navHeaders = Array.from(document.getElementsByClassName('navigation-widget-header'));
const navHeaders2 = Array.from(document.getElementsByClassName('navigation-item-level-0'));

appviewEditor.style.backgroundColor = '#282b30';
whitePage.style.backgroundColor = '#36393e';
navLinks.forEach(link => link.style.color = '#ccc');
navHeaders.forEach(header => header.style.color = '#7289da');
navHeaders2.forEach(header => header.style.color = '#7289da');
