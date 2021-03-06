const dao = [

  // public, appears in builder

  {
    name: "canvasId",
    label: "Canvas ID",
    type: "id",
    default: "",
    private: false,
    save: true
  },

  {
    name: "canvasTitle",
    label: "Canvas Title",
    type: "string",
    default: "",
    private: false,
    save: true
  },

  {
    name: "canvasSize",
    label: "Canvas Size",
    type: "array",
    default: [800, 600],
    private: false,
    save: true
  },

  {
    name: "canvasSnap",
    label: "Snap to Grid",
    type: "boolean",
    default: false,
    private: false,
    save: true
  },

  {
    name: "canvasSnapStep",
    label: "Snap Step",
    type: "number",
    default: 10,
    private: false,
    save: true
  },

  {
    name: "canvasRulers",
    label: "Canvas Rulers",
    type: "boolean",
    default: true,
    private: false,
    save: true
  },

  {
    name: "canvasContent",
    label: "Canvas Content",
    type: "string",
    default: "<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'></svg>",
    private: true,
    save: true
  },

  {
    name: "canvasMode",
    label: "Canvas Mode",
    type: "string",
    default: "select",
    private: true,
    save: true
  },

  {
    name: "canvasFill",
    label: "Canvas Fill",
    type: "object",
    default: {color: 'fff', opacity: 1},
    private: true,
    save: true
  },

  {
    name: "canvasStroke",
    label: "Canvas Stroke",
    type: "object",
    default: {color: '000', opacity: 1},
    private: true,
    save: true
  },

  {
    name: "canvasBackground",
    label: "Canvas Fill",
    type: "object",
    default: {color: '000', opacity: 0},
    private: true,
    save: true
  },

  {
    name: "canvasCreationDate",
    label: "Canvas Creation Date",
    type: "string",
    default: new Date().toString(),
    private: true,
    save: false
  },
  // When this page was created
  {
    name: "canvasLastModified",
    label: "Canvas Last Modified",
    type: "string",
    default: new Date().toString(),
    private: true,
    save: false
  },
 
  // system level fields
  {
    name: "darkmode",
    label: "Dark Mode",
    type: "boolean",
    default: true,
    private: true,
    save: true,
  },
  // english or spanish, set by the browser
  {
    name: "language",
    label: "Language",
    type: "string",
    default: null,
    private: true,
    save: true,
  },
  // if it is the first time visitor we onboard them
  {
    name: "visited",
    label: "Has visited before",
    type: "boolean",
    default: false,
    private: true,
    save: true,
  },

  // how many seconds have passed since the user moved the mouse
  // mostly for hiding UI, but we could also use it for exercises
  // where we want to force keyboard usage to edit, for example
  {
    name: "mouseIdle",
    label: "Mouse Idle",
    type: "number",
    default: false,
    private: true,
    save: false,
  },
];

dao.forEach(thing => {
  thing.clean = function(value){
     if (thing.type === "number") return isNaN(value) ? 0 : parseInt(value, 10);
     if (thing.type === "string") return value  || "";
     if (thing.type === "boolean") return value === "true" || value === true ? true : false;
     if (thing.type === "url") return value || "";
     if (thing.type === "id") return value || 0;
     if (thing.type === "array") return typeof value === "object" ? value : value ? value.split(",") : [];
     if (thing.type === "object") return typeof value === "object" ? value : value ? JSON.parse(value) : {};
     else throw "type " + thing.type + " does not exist";
  }
});
