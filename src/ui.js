// options structure:
// [
//     {
//         label: string,
//         value: string,
//         selected: boolean,
//         disabled: boolean
//     }
// ]
function selectAddOptions(select, options = []) {
  for (const option of options) {
    const el = document.createElement("option");
    el.innerText = option.label;
    el.value = option.value;
    if (
      Object.prototype.hasOwnProperty.call(option, "selected") &&
      option.selected
    ) {
      el.setAttribute("selected", "selected");
    }

    if (Object.prototype.hasOwnProperty.call(option, "disabled")) {
      el.disabled = option.disabled;
    }

    select.appendChild(el);
  }
}

export function createHeader(html, level = 4) {
  const header = document.createElement(`h${level}`);
  header.classList.add("vot-header");
  header.innerHTML = html;

  return header;
}

export function createInformation(html, valueHtml) {
  const container = document.createElement("div");
  container.classList.add("vot-info");

  const header = document.createElement("div");
  header.innerHTML = html;

  const value = document.createElement("div");
  value.innerHTML = valueHtml;

  container.appendChild(header);
  container.appendChild(value);

  return {
    container,
    header,
    value
  };
}

export function createButton(html) {
  const button = document.createElement("button");
  button.classList.add("vot-button");
  button.innerHTML = html;

  return button;
}

export function createTextButton(html) {
  const button = document.createElement("button");
  button.classList.add("vot-text-button");
  button.innerHTML = html;

  return button;
}

export function createOutlinedButton(html) {
  const button = document.createElement("button");
  button.classList.add("vot-outlined-button");
  button.innerHTML = html;

  return button;
}

export function createIconButton(html) {
  const button = document.createElement("button");
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
  const container = document.createElement("div");
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
    label
  };
}

export function createSelect(html, options = []) {
  const container = document.createElement("div");
  container.classList.add("vot-select");

  const label = document.createElement("span");
  label.innerHTML = html;

  const select = document.createElement("select");

  container.appendChild(label);
  container.appendChild(select);

  selectAddOptions(select, options);

  return {
    container,
    label,
    select
  };
}

export function createTextfield(html, value = "", multiline = false) {
  const container = document.createElement("div");
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
    label
  };
}

export function createDialog(html) {
  const container = document.createElement("div");
  container.classList.add("vot-dialog-container");
  container.hidden = true;

  const backdrop = document.createElement("div");
  backdrop.classList.add("vot-dialog-backdrop");

  const dialog = document.createElement("div");
  dialog.classList.add("vot-dialog");

  const contentWrapper = document.createElement("div");
  contentWrapper.classList.add("vot-dialog-content-wrapper");

  const headerContainer = document.createElement("div");
  headerContainer.classList.add("vot-dialog-header-container");

  const bodyContainer = document.createElement("div");
  bodyContainer.classList.add("vot-dialog-body-container");

  const footerContainer = document.createElement("div");
  footerContainer.classList.add("vot-dialog-footer-container");

  const titleContainer = document.createElement("h2");
  titleContainer.classList.add("vot-dialog-title-container");

  const closeButton = createIconButton(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="100%" viewBox="0 -960 960 960"><path d="M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"/></svg>`);
  closeButton.classList.add("vot-dialog-close-button");

  backdrop.onclick = closeButton.onclick = () => {
    container.hidden = true;
  };

  const title = document.createElement("div");
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
    title
  };
}

export function createVOTButton(html) {
  const container = document.createElement("div");
  container.classList.add("vot-segmented-button");

  const translateButton = document.createElement("button");
  translateButton.classList.add("vot-segment");
  translateButton.classList.add("vot-translate-button");
  translateButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m604-202-35 97q-4 11-14 18t-22 7q-20 0-32.5-16.5T496-133l152-402q5-11 15-18t22-7h30q12 0 22 7t15 18l152 403q8 19-4 35.5T868-80q-13 0-22.5-7.5T831-107l-33-95H604Zm24-70h144l-70-198h-4l-70 198ZM360-400 188-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l174-174q-38-42-66.5-87T190-640h84q18 36 38.5 65t49.5 61q44-48 73-98.5T484-720H80q-17 0-28.5-11.5T40-760q0-17 11.5-28.5T80-800h240v-40q0-17 11.5-28.5T360-880q17 0 28.5 11.5T400-840v40h240q17 0 28.5 11.5T680-760q0 17-11.5 28.5T640-720h-76q-21 71-57 138t-89 126l96 98-30 82-124-124Z"/></svg>`;

  const separator = document.createElement("div");
  separator.classList.add("vot-separator");

  // TODO
  // const pipButton = document.createElement("button");
  // pipButton.classList.add("vot-segment-only-icon");
  // pipButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-520q-17 0-28.5-11.5T80-560q0-17 11.5-28.5T120-600h104L80-743q-12-12-12-28.5T80-800q12-12 28.5-12t28.5 12l143 144v-104q0-17 11.5-28.5T320-800q17 0 28.5 11.5T360-760v200q0 17-11.5 28.5T320-520H120Zm40 360q-33 0-56.5-23.5T80-240v-160q0-17 11.5-28.5T120-440q17 0 28.5 11.5T160-400v160h280q17 0 28.5 11.5T480-200q0 17-11.5 28.5T440-160H160Zm680-280q-17 0-28.5-11.5T800-480v-240H480q-17 0-28.5-11.5T440-760q0-17 11.5-28.5T480-800h320q33 0 56.5 23.5T880-720v240q0 17-11.5 28.5T840-440ZM600-160q-17 0-28.5-11.5T560-200v-120q0-17 11.5-28.5T600-360h240q17 0 28.5 11.5T880-320v120q0 17-11.5 28.5T840-160H600Z"/></svg>`;

  // const separator2 = document.createElement("div");
  // separator2.classList.add("vot-separator");

  const menuButton = document.createElement("button");
  menuButton.classList.add("vot-segment-only-icon");
  menuButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/></svg>`;

  const label = document.createElement("span");
  label.classList.add("vot-segment-label");
  label.innerHTML = html;

  container.appendChild(translateButton);
  container.appendChild(separator);
  // container.appendChild(pipButton);
  // container.appendChild(separator2);
  container.appendChild(menuButton);
  translateButton.appendChild(label);

  return {
    container,
    translateButton,
    separator,
    // pipButton,
    // separator2,
    menuButton,
    label
  };
}

export function createVOTMenu(html) {
  const container = document.createElement("div");
  container.classList.add("vot-menu");
  container.hidden = true;

  const contentWrapper = document.createElement("div");
  contentWrapper.classList.add("vot-menu-content-wrapper");

  const headerContainer = document.createElement("div");
  headerContainer.classList.add("vot-menu-header-container");

  const bodyContainer = document.createElement("div");
  bodyContainer.classList.add("vot-menu-body-container");

  const footerContainer = document.createElement("div");
  footerContainer.classList.add("vot-menu-footer-container");

  const titleContainer = document.createElement("h2");
  titleContainer.classList.add("vot-menu-title-container");

  const title = document.createElement("div");
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
    title
  };
}

export function createVOTLanguageSelect(fromOptions = [], toOptions = []) {
  const container = document.createElement("div");
  container.classList.add("vot-lang-select");

  const from = document.createElement("div");
  from.classList.add("vot-select");

  const fromSelect = document.createElement("select");

  const icon = document.createElement("div");
  icon.classList.add("vot-lang-select-icon");
  icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M647-440H200q-17 0-28.5-11.5T160-480q0-17 11.5-28.5T200-520h447L451-716q-12-12-11.5-28t12.5-28q12-11 28-11.5t28 11.5l264 264q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-11 11-27.5 11T452-188q-12-12-12-28.5t12-28.5l195-195Z"/></svg>`;

  const to = document.createElement("div");
  to.classList.add("vot-select");

  const toSelect = document.createElement("select");

  container.appendChild(from);
  container.appendChild(icon);
  container.appendChild(to);
  from.appendChild(fromSelect);
  to.appendChild(toSelect);

  selectAddOptions(fromSelect, fromOptions);
  selectAddOptions(toSelect, toOptions);

  return {
    container,
    from,
    fromSelect,
    icon,
    to,
    toSelect
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
  createSelect,
  createTextfield,
  createDialog,
  createVOTButton,
  createVOTMenu,
  createVOTLanguageSelect,
  updateSlider
};
