import { localizationProvider } from "./localization/localizationProvider.js";

export function createHeader(html, level = 4) {
  const header = document.createElement("vot-block");
  header.classList.add("vot-header");
  header.classList.add(`vot-header-level-${level}`);
  header.innerHTML = html;

  return header;
}

export function createInformation(html, valueHtml) {
  const container = document.createElement("vot-block");
  container.classList.add("vot-info");

  const header = document.createElement("vot-block");
  header.innerHTML = html;

  const value = document.createElement("vot-block");
  value.innerHTML = valueHtml;

  container.appendChild(header);
  container.appendChild(value);

  return {
    container,
    header,
    value,
  };
}

export function createButton(html) {
  const button = document.createElement("vot-block");
  button.classList.add("vot-button");
  button.innerHTML = html;

  return button;
}

export function createTextButton(html) {
  const button = document.createElement("vot-block");
  button.classList.add("vot-text-button");
  button.innerHTML = html;

  return button;
}

export function createOutlinedButton(html) {
  const button = document.createElement("vot-block");
  button.classList.add("vot-outlined-button");
  button.innerHTML = html;

  return button;
}

export function createIconButton(html) {
  const button = document.createElement("vot-block");
  button.classList.add("vot-icon-button");
  button.innerHTML = html;

  return button;
}

export function createCheckbox(html, value = false) {
  const container = document.createElement("label");
  container.classList.add("vot-checkbox");

  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = Boolean(value);

  const label = document.createElement("span");
  label.innerHTML = html;

  container.appendChild(input);
  container.appendChild(label);

  return { container, input, label };
}

export function updateSlider(input) {
  const value = parseFloat(input.value);
  const min = input.min === "" ? 0 : parseFloat(input.min);
  const max = input.max === "" ? 100 : parseFloat(input.max);
  const progress = (value - min) / (max - min);
  input.parentElement.setAttribute("style", `--vot-progress: ${progress}`);
}

export function createSlider(html, value = 50, min = 0, max = 100) {
  const container = document.createElement("vot-block");
  container.classList.add("vot-slider");

  const input = document.createElement("input");
  input.type = "range";
  input.min = min;
  input.max = max;
  input.value = value;

  const label = document.createElement("span");
  label.innerHTML = html;

  container.appendChild(input);
  container.appendChild(label);

  input.addEventListener("input", (e) => updateSlider(e.target));
  updateSlider(input);

  return {
    container,
    input,
    label,
  };
}

export function createTextfield(html, value = "", multiline = false) {
  const container = document.createElement("vot-block");
  container.classList.add("vot-textfield");

  const input = document.createElement(multiline ? "textarea" : "input");
  input.placeholder = " ";
  input.value = value;

  const label = document.createElement("span");
  label.innerHTML = html;

  container.appendChild(input);
  container.appendChild(label);

  return {
    container,
    input,
    label,
  };
}

export function createDialog(html) {
  const container = document.createElement("vot-block");
  container.classList.add("vot-dialog-container");
  container.hidden = true;

  const backdrop = document.createElement("vot-block");
  backdrop.classList.add("vot-dialog-backdrop");

  const dialog = document.createElement("vot-block");
  dialog.classList.add("vot-dialog");

  const contentWrapper = document.createElement("vot-block");
  contentWrapper.classList.add("vot-dialog-content-wrapper");

  const headerContainer = document.createElement("vot-block");
  headerContainer.classList.add("vot-dialog-header-container");

  const bodyContainer = document.createElement("vot-block");
  bodyContainer.classList.add("vot-dialog-body-container");

  const footerContainer = document.createElement("vot-block");
  footerContainer.classList.add("vot-dialog-footer-container");

  const titleContainer = document.createElement("vot-block");
  titleContainer.classList.add("vot-dialog-title-container");

  const closeButton = createIconButton(
    `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="100%" viewBox="0 -960 960 960"><path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"/></svg>`,
  );
  closeButton.classList.add("vot-dialog-close-button");

  backdrop.onclick = closeButton.onclick = () => {
    container.hidden = true;
  };

  const title = document.createElement("vot-block");
  title.classList.add("vot-dialog-title");
  title.innerHTML = html;

  container.appendChild(backdrop);
  container.appendChild(dialog);
  dialog.appendChild(contentWrapper);
  contentWrapper.appendChild(headerContainer);
  contentWrapper.appendChild(bodyContainer);
  contentWrapper.appendChild(footerContainer);
  headerContainer.appendChild(titleContainer);
  headerContainer.appendChild(closeButton);
  titleContainer.appendChild(title);

  return {
    container,
    backdrop,
    dialog,
    contentWrapper,
    headerContainer,
    bodyContainer,
    footerContainer,
    titleContainer,
    closeButton,
    title,
  };
}

export function createVOTButton(html) {
  const container = document.createElement("vot-block");
  container.classList.add("vot-segmented-button");

  const translateButton = document.createElement("vot-block");
  translateButton.classList.add("vot-segment");
  translateButton.classList.add("vot-translate-button");
  translateButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m604-202-35 97q-4 11-14 18t-22 7q-20 0-32.5-16.5T496-133l152-402q5-11 15-18t22-7h30q12 0 22 7t15 18l152 403q8 19-4 35.5T868-80q-13 0-22.5-7.5T831-107l-33-95H604Zm24-70h144l-70-198h-4l-70 198ZM360-400 188-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l174-174q-38-42-66.5-87T190-640h84q18 36 38.5 65t49.5 61q44-48 73-98.5T484-720H80q-17 0-28.5-11.5T40-760q0-17 11.5-28.5T80-800h240v-40q0-17 11.5-28.5T360-880q17 0 28.5 11.5T400-840v40h240q17 0 28.5 11.5T680-760q0 17-11.5 28.5T640-720h-76q-21 71-57 138t-89 126l96 98-30 82-124-124Z"/></svg>`;

  const separator = document.createElement("vot-block");
  separator.classList.add("vot-separator");

  const pipButton = document.createElement("vot-block");
  pipButton.classList.add("vot-segment-only-icon");
  pipButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-520q-17 0-28.5-11.5T80-560q0-17 11.5-28.5T120-600h104L80-743q-12-12-12-28.5T80-800q12-12 28.5-12t28.5 12l143 144v-104q0-17 11.5-28.5T320-800q17 0 28.5 11.5T360-760v200q0 17-11.5 28.5T320-520H120Zm40 360q-33 0-56.5-23.5T80-240v-160q0-17 11.5-28.5T120-440q17 0 28.5 11.5T160-400v160h280q17 0 28.5 11.5T480-200q0 17-11.5 28.5T440-160H160Zm680-280q-17 0-28.5-11.5T800-480v-240H480q-17 0-28.5-11.5T440-760q0-17 11.5-28.5T480-800h320q33 0 56.5 23.5T880-720v240q0 17-11.5 28.5T840-440ZM600-160q-17 0-28.5-11.5T560-200v-120q0-17 11.5-28.5T600-360h240q17 0 28.5 11.5T880-320v120q0 17-11.5 28.5T840-160H600Z"/></svg>`;

  const separator2 = document.createElement("vot-block");
  separator2.classList.add("vot-separator");

  const menuButton = document.createElement("vot-block");
  menuButton.classList.add("vot-segment-only-icon");
  menuButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/></svg>`;

  const label = document.createElement("span");
  label.classList.add("vot-segment-label");
  label.innerHTML = html;

  container.appendChild(translateButton);
  container.appendChild(separator);
  container.appendChild(pipButton);
  container.appendChild(separator2);
  container.appendChild(menuButton);
  translateButton.appendChild(label);

  return {
    container,
    translateButton,
    separator,
    pipButton,
    separator2,
    menuButton,
    label,
  };
}

export function createVOTMenu(html) {
  const container = document.createElement("vot-block");
  container.classList.add("vot-menu");
  container.hidden = true;

  const contentWrapper = document.createElement("vot-block");
  contentWrapper.classList.add("vot-menu-content-wrapper");

  const headerContainer = document.createElement("vot-block");
  headerContainer.classList.add("vot-menu-header-container");

  const bodyContainer = document.createElement("vot-block");
  bodyContainer.classList.add("vot-menu-body-container");

  const footerContainer = document.createElement("vot-block");
  footerContainer.classList.add("vot-menu-footer-container");

  const titleContainer = document.createElement("vot-block");
  titleContainer.classList.add("vot-menu-title-container");

  const title = document.createElement("vot-block");
  title.classList.add("vot-menu-title");
  title.innerHTML = html;

  container.appendChild(contentWrapper);
  contentWrapper.appendChild(headerContainer);
  contentWrapper.appendChild(bodyContainer);
  contentWrapper.appendChild(footerContainer);
  headerContainer.appendChild(titleContainer);
  titleContainer.appendChild(title);

  return {
    container,
    contentWrapper,
    headerContainer,
    bodyContainer,
    footerContainer,
    titleContainer,
    title,
  };
}

export function createVOTSelectLabel(text) {
  const label = document.createElement("span");
  label.classList.add("vot-select-label");
  label.innerText = text;
  return label;
}

export function createVOTSelect(selectTitle, dialogTitle, items, options = {}) {
  const onSelectCb = options.onSelectCb || function () {};
  const labelElement = options.labelElement || "";
  let selectedItems = [];

  const container = document.createElement("vot-block");
  container.classList.add("vot-select");

  if (labelElement) {
    container.appendChild(labelElement);
  }

  const outer = document.createElement("vot-block");
  outer.classList.add("vot-select-outer");

  const title = document.createElement("span");
  title.classList.add("vot-select-title");
  title.innerText = selectTitle;

  if (selectTitle === undefined) {
    title.innerText = items.find((i) => i.selected === true)?.label;
  }

  const arrowIcon = document.createElement("vot-block");
  arrowIcon.classList.add("vot-select-arrow-icon");
  arrowIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062Z"/></svg>`;

  outer.append(title, arrowIcon);
  outer.onclick = () => {
    const votSelectDialog = createDialog(dialogTitle);
    votSelectDialog.container.classList.add("vot-dialog-temp");
    votSelectDialog.container.hidden = false;
    document.documentElement.appendChild(votSelectDialog.container);

    const contentList = document.createElement("vot-block");
    contentList.classList.add("vot-select-content-list");

    for (const item of items) {
      const contentItem = document.createElement("vot-block");
      contentItem.classList.add("vot-select-content-item");
      contentItem.innerText = item.label;
      contentItem.dataset.votSelected = item.selected;
      contentItem.dataset.votValue = item.value;
      if (item.disabled) {
        contentItem.inert = true;
      }

      contentItem.onclick = async (e) => {
        if (e.target.inert) return;

        // removing the selected value for updating
        const contentItems = contentList.childNodes;
        contentItems.forEach((ci) => (ci.dataset.votSelected = false));
        // fixed selection after closing the modal and opening again
        items.forEach((i) => (i.selected = i.value === item.value));

        contentItem.dataset.votSelected = true;
        title.innerText = item.label;

        // !!! use e.target.dataset.votValue instead of e.target.value !!!
        await onSelectCb(e);
      };
      contentList.appendChild(contentItem);
    }

    // search logic
    const votSearchLangTextfield = createTextfield(
      localizationProvider.get("searchField"),
    );

    votSearchLangTextfield.input.oninput = (e) => {
      const searchText = e.target.value.toLowerCase();
      // check if there are lovercase characters in the string. used for smarter search
      Array.from(selectedItems).forEach(
        (ci) => (ci.hidden = !ci.innerText.toLowerCase().includes(searchText)),
      );
    };

    votSelectDialog.bodyContainer.append(
      votSearchLangTextfield.container,
      contentList,
    );
    selectedItems = contentList.childNodes;

    // remove the modal so that they do not accumulate
    votSelectDialog.backdrop.onclick = votSelectDialog.closeButton.onclick =
      () => {
        votSelectDialog.container.remove();
        selectedItems = [];
      };
  };

  container.append(outer);

  const setTitle = (newTitle) => {
    title.innerText = newTitle;
  };

  const setSelected = (val) => {
    Array.from(selectedItems)
      .filter((ci) => !ci.inert)
      .forEach((ci) => (ci.dataset.votSelected = ci.dataset.votValue === val));
    items.forEach((i) => (i.selected = String(i.value) === val));
  };

  const updateItems = (newItems) => {
    items = newItems;
  };

  return {
    container,
    title,
    arrowIcon,
    labelElement,
    setTitle,
    setSelected,
    updateItems,
  };
}

export function createVOTLanguageSelect(options) {
  const fromTitle = options.fromTitle || "#UNDEFINED";
  const fromDialogTitle = options.fromDialogTitle || "#UNDEFINED";
  const fromItems = options.fromItems || [];
  const fromOnSelectCB = options.fromOnSelectCB || function () {};
  const toTitle = options.toTitle || "#UNDEFINED";
  const toDialogTitle = options.toDialogTitle || "#UNDEFINED";
  const toItems = options.toItems || [];
  const toOnSelectCB = options.toOnSelectCB || function () {};

  const container = document.createElement("vot-block");
  container.classList.add("vot-lang-select");

  const fromSelect = createVOTSelect(fromTitle, fromDialogTitle, fromItems, {
    onSelectCb: fromOnSelectCB,
  });

  const icon = document.createElement("vot-block");
  icon.classList.add("vot-lang-select-icon");
  icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>`;

  const toSelect = createVOTSelect(toTitle, toDialogTitle, toItems, {
    onSelectCb: toOnSelectCB,
  });

  container.append(fromSelect.container, icon, toSelect.container);

  return {
    container,
    fromSelect,
    icon,
    toSelect,
  };
}

export default {
  createHeader,
  createInformation,
  createButton,
  createTextButton,
  createOutlinedButton,
  createIconButton,
  createCheckbox,
  createSlider,
  createTextfield,
  createDialog,
  createVOTButton,
  createVOTMenu,
  createVOTSelectLabel,
  createVOTSelect,
  createVOTLanguageSelect,
  updateSlider,
};
