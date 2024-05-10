{
  "version": "1.0.0",
  "componentsMap": [
      {
          "package": "@alilc/lowcode-materials",
          "version": "1.0.7",
          "exportName": "NextText",
          "main": "lib/index.js",
          "destructuring": true,
          "subName": "",
          "componentName": "NextText"
      },
      {
          "package": "@alifd/layout",
          "version": "2.0.12",
          "exportName": "P",
          "main": "lib/index.js",
          "destructuring": true,
          "subName": "",
          "componentName": "FDP"
      },
      {
          "package": "@alifd/layout",
          "version": "2.0.12",
          "exportName": "Cell",
          "main": "lib/index.js",
          "destructuring": true,
          "subName": "",
          "componentName": "FDCell"
      },
      {
          "package": "@alifd/layout",
          "version": "2.0.12",
          "exportName": "Block",
          "main": "lib/index.js",
          "destructuring": true,
          "subName": "",
          "componentName": "FDBlock"
      },
      {
          "package": "@alifd/next",
          "version": "1.25.23",
          "exportName": "Button",
          "main": "",
          "destructuring": true,
          "subName": "",
          "componentName": "Button"
      },
      {
          "package": "@alifd/layout",
          "version": "2.0.12",
          "exportName": "Row",
          "main": "lib/index.js",
          "destructuring": true,
          "subName": "",
          "componentName": "FDRow"
      },
      {
          "package": "@alifd/layout",
          "version": "2.0.12",
          "exportName": "Section",
          "main": "lib/index.js",
          "destructuring": true,
          "subName": "",
          "componentName": "FDSection"
      },
      {
          "package": "@alifd/layout",
          "version": "2.0.12",
          "exportName": "Page",
          "main": "lib/index.js",
          "destructuring": true,
          "componentName": "FDPage"
      },
      {
          "devMode": "lowCode",
          "componentName": "Page"
      }
  ],
  "componentsTree": [
      {
          "componentName": "Page",
          "id": "node_dockcviv8fo1",
          "props": {
              "ref": "outerView",
              "style": {
                  "height": "100%"
              }
          },
          "docId": "doclaqkk3b9",
          "fileName": "/",
          "dataSource": {
              "list": [
                  {
                      "type": "fetch",
                      "isInit": true,
                      "options": {
                          "params": {},
                          "method": "GET",
                          "isCors": true,
                          "timeout": 5000,
                          "headers": {},
                          "uri": "mock/info.json"
                      },
                      "id": "info",
                      "shouldFetch": {
                          "type": "JSFunction",
                          "value": "function() { \n  console.log('should fetch.....');\n  return true; \n}"
                      }
                  }
              ]
          },
          "state": {
              "text": {
                  "type": "JSExpression",
                  "value": "\"outer\""
              },
              "isShowDialog": {
                  "type": "JSExpression",
                  "value": "false"
              }
          },
          "css": "body {\n  font-size: 12px;\n}\n\n.button {\n  width: 100px;\n  color: #ff00ff\n}",
          "lifeCycles": {
              "componentDidMount": {
                  "type": "JSFunction",
                  "value": "function componentDidMount() {\n  console.log('did mount');\n}"
              },
              "componentWillUnmount": {
                  "type": "JSFunction",
                  "value": "function componentWillUnmount() {\n  console.log('will unmount');\n}"
              }
          },
          "methods": {
              "testFunc": {
                  "type": "JSFunction",
                  "value": "function testFunc() {\n  console.log('test func');\n}"
              },
              "onClick": {
                  "type": "JSFunction",
                  "value": "function onClick() {\n  this.setState({\n  isShowDialog: true\n  });\n}"
              },
              "closeDialog": {
                  "type": "JSFunction",
                  "value": "function closeDialog() {\n  this.setState({\n  isShowDialog: false\n  });\n}"
              },
              "getHelloWorldText": {
                  "type": "JSFunction",
                  "value": "function getHelloWorldText() {\n  return this.i18n('i18n-jwg27yo4');\n}"
              },
              "getHelloWorldText2": {
                  "type": "JSFunction",
                  "value": "function getHelloWorldText2() {\n  return this.i18n('i18n-jwg27yo3', {\n  name: '絮黎'\n  });\n}"
              },
              "onTestConstantsButtonClicked": {
                  "type": "JSFunction",
                  "value": "function onTestConstantsButtonClicked() {\n  console.log('constants.ConstantA:', this.constants.ConstantA);\n  console.log('constants.ConstantB:', this.constants.ConstantB);\n}"
              },
              "onTestUtilsButtonClicked": {
                  "type": "JSFunction",
                  "value": "function onTestUtilsButtonClicked() {\n  this.utils.demoUtil('param1', 'param2');\n}"
              }
          },
          "originCode": "class LowcodeComponent extends Component {\n  state = {\n    \"text\": \"outer\",\n    \"isShowDialog\": false\n  }\n  componentDidMount() {\n    console.log('did mount');\n  }\n  componentWillUnmount() {\n    console.log('will unmount');\n  }\n  testFunc() {\n    console.log('test func');\n  }\n  onClick() {\n    this.setState({\n      isShowDialog: true\n    });\n  }\n  closeDialog() {\n    this.setState({\n      isShowDialog: false\n    });\n  }\n  getHelloWorldText() {\n    return this.i18n('i18n-jwg27yo4');\n  }\n  getHelloWorldText2() {\n    return this.i18n('i18n-jwg27yo3', {\n      name: '絮黎',\n    });\n  }\n  onTestConstantsButtonClicked() {\n    console.log('constants.ConstantA:', this.constants.ConstantA);\n    console.log('constants.ConstantB:', this.constants.ConstantB);\n\t}\n\tonTestUtilsButtonClicked(){\n    this.utils.demoUtil('param1', 'param2');\n\t}\n}",
          "hidden": false,
          "title": "",
          "isLocked": false,
          "condition": true,
          "conditionGroup": "",
          "children": [
              {
                  "componentName": "FDPage",
                  "id": "node_oclfjpfqjy5",
                  "props": {
                      "contentProps": {
                          "style": {
                              "background": "rgba(255,255,255,0)"
                          }
                      },
                      "ref": "fdpage-bb43fbb0"
                  },
                  "title": "页面",
                  "hidden": false,
                  "isLocked": false,
                  "condition": true,
                  "conditionGroup": "",
                  "children": [
                      {
                          "componentName": "FDSection",
                          "id": "node_oclfjpfqjy6",
                          "props": {
                              "style": {
                                  "backgroundColor": "rgba(255,255,255,1)",
                                  "minHeight": ""
                              }
                          },
                          "title": "区域",
                          "hidden": false,
                          "isLocked": false,
                          "condition": true,
                          "conditionGroup": "",
                          "children": [
                              {
                                  "componentName": "FDBlock",
                                  "id": "node_oclfjpfqjy7",
                                  "props": {
                                      "mode": "transparent",
                                      "span": 12
                                  },
                                  "title": "区块",
                                  "hidden": false,
                                  "isLocked": false,
                                  "condition": true,
                                  "conditionGroup": "",
                                  "children": [
                                      {
                                          "componentName": "FDCell",
                                          "id": "node_oclfjpfqjy8",
                                          "props": {
                                              "align": "left",
                                              "verAlign": "top",
                                              "style": {
                                                  "backgroundColor": "rgba(255,255,255,1)",
                                                  "minHeight": ""
                                              },
                                              "width": ""
                                          },
                                          "title": "容器",
                                          "hidden": false,
                                          "isLocked": false,
                                          "condition": true,
                                          "conditionGroup": "",
                                          "children": [
                                              {
                                                  "componentName": "FDP",
                                                  "id": "node_oclfjpfqjy10",
                                                  "props": {},
                                                  "title": "段落",
                                                  "hidden": false,
                                                  "isLocked": false,
                                                  "condition": true,
                                                  "conditionGroup": "",
                                                  "children": [
                                                      {
                                                          "componentName": "NextText",
                                                          "id": "node_oclfjpfqjyz",
                                                          "props": {
                                                              "type": "h1",
                                                              "children": "Home",
                                                              "mark": false,
                                                              "code": false,
                                                              "delete": false,
                                                              "underline": false,
                                                              "strong": false,
                                                              "prefix": "",
                                                              "classname": "",
                                                              "style": {
                                                                  "fontSize": "25px"
                                                              }
                                                          },
                                                          "hidden": false,
                                                          "title": "",
                                                          "isLocked": false,
                                                          "condition": true,
                                                          "conditionGroup": ""
                                                      }
                                                  ]
                                              }
                                          ]
                                      }
                                  ]
                              },
                              {
                                  "componentName": "FDBlock",
                                  "id": "node_oclfjpfqjy9",
                                  "props": {
                                      "mode": "transparent",
                                      "span": 12,
                                      "style": {
                                          "backgroundColor": "rgba(255,255,255,1)",
                                          "minHeight": ""
                                      }
                                  },
                                  "title": "区块",
                                  "hidden": false,
                                  "isLocked": false,
                                  "condition": true,
                                  "conditionGroup": "",
                                  "children": [
                                      {
                                          "componentName": "FDRow",
                                          "id": "node_oclfjpfqjy11",
                                          "props": {
                                              "style": {
                                                  "backgroundColor": "rgba(255,255,255,1)"
                                              }
                                          },
                                          "title": "行容器",
                                          "hidden": false,
                                          "isLocked": false,
                                          "condition": true,
                                          "conditionGroup": "",
                                          "children": [
                                              {
                                                  "componentName": "FDCell",
                                                  "id": "node_oclfjpfqjya",
                                                  "props": {
                                                      "align": "left",
                                                      "verAlign": "top",
                                                      "style": {
                                                          "backgroundColor": "rgba(255,255,255,1)"
                                                      },
                                                      "width": ""
                                                  },
                                                  "title": "容器",
                                                  "hidden": false,
                                                  "isLocked": false,
                                                  "condition": true,
                                                  "conditionGroup": "",
                                                  "children": [
                                                      {
                                                          "componentName": "FDP",
                                                          "id": "node_oclfjqcdwn14",
                                                          "props": {},
                                                          "title": "段落",
                                                          "hidden": false,
                                                          "isLocked": false,
                                                          "condition": true,
                                                          "conditionGroup": "",
                                                          "children": [
                                                              {
                                                                  "componentName": "NextText",
                                                                  "id": "node_oclfjqcdwn13",
                                                                  "props": {
                                                                      "type": "h5",
                                                                      "children": "多语言展示",
                                                                      "mark": false,
                                                                      "code": false,
                                                                      "delete": false,
                                                                      "underline": false,
                                                                      "strong": false,
                                                                      "prefix": "",
                                                                      "classname": "",
                                                                      "style": {
                                                                          "fontSize": "18px"
                                                                      }
                                                                  },
                                                                  "hidden": false,
                                                                  "title": "",
                                                                  "isLocked": false,
                                                                  "condition": true,
                                                                  "conditionGroup": ""
                                                              }
                                                          ]
                                                      },
                                                      {
                                                          "componentName": "FDP",
                                                          "id": "node_oclfjqcdwn2k",
                                                          "props": {},
                                                          "title": "段落",
                                                          "hidden": false,
                                                          "isLocked": false,
                                                          "condition": true,
                                                          "conditionGroup": "",
                                                          "children": [
                                                              {
                                                                  "componentName": "NextText",
                                                                  "id": "node_oclfjqcdwn2j",
                                                                  "props": {
                                                                      "type": "inherit",
                                                                      "children": {
                                                                          "type": "JSExpression",
                                                                          "value": "this.getHelloWorldText()",
                                                                          "mock": ""
                                                                      },
                                                                      "mark": false,
                                                                      "code": false,
                                                                      "delete": false,
                                                                      "underline": false,
                                                                      "strong": false,
                                                                      "prefix": "",
                                                                      "classname": ""
                                                                  },
                                                                  "hidden": false,
                                                                  "title": "",
                                                                  "isLocked": false,
                                                                  "condition": true,
                                                                  "conditionGroup": ""
                                                              },
                                                              {
                                                                  "componentName": "NextText",
                                                                  "id": "node_oclfjqcf7z15",
                                                                  "props": {
                                                                      "type": "inherit",
                                                                      "children": {
                                                                          "type": "JSExpression",
                                                                          "value": "this.getHelloWorldText2()",
                                                                          "mock": "基于 Ali-Lowcode-Engine 快速打造高生产力的低代码研发平台, 基于自然布局体系快速搭建页面"
                                                                      },
                                                                      "mark": false,
                                                                      "code": false,
                                                                      "delete": false,
                                                                      "underline": false,
                                                                      "strong": false,
                                                                      "prefix": "",
                                                                      "classname": ""
                                                                  },
                                                                  "hidden": false,
                                                                  "title": "",
                                                                  "isLocked": false,
                                                                  "condition": true,
                                                                  "conditionGroup": ""
                                                              }
                                                          ]
                                                      }
                                                  ]
                                              },
                                              {
                                                  "componentName": "FDCell",
                                                  "id": "node_oclfjpfqjy12",
                                                  "props": {
                                                      "align": "left",
                                                      "verAlign": "top",
                                                      "style": {
                                                          "backgroundColor": "rgba(255,255,255,1)"
                                                      }
                                                  },
                                                  "title": "容器",
                                                  "hidden": false,
                                                  "isLocked": false,
                                                  "condition": true,
                                                  "conditionGroup": "",
                                                  "children": [
                                                      {
                                                          "componentName": "FDP",
                                                          "id": "node_oclfjqcf7z2h",
                                                          "props": {},
                                                          "title": "段落",
                                                          "hidden": false,
                                                          "isLocked": false,
                                                          "condition": true,
                                                          "conditionGroup": "",
                                                          "children": [
                                                              {
                                                                  "componentName": "NextText",
                                                                  "id": "node_oclfjqcf7z2g",
                                                                  "props": {
                                                                      "type": "h5",
                                                                      "children": "交互展示",
                                                                      "mark": false,
                                                                      "code": false,
                                                                      "delete": false,
                                                                      "underline": false,
                                                                      "strong": false,
                                                                      "prefix": "",
                                                                      "classname": "",
                                                                      "style": {
                                                                          "fontSize": "18px"
                                                                      }
                                                                  },
                                                                  "hidden": false,
                                                                  "title": "",
                                                                  "isLocked": false,
                                                                  "condition": true,
                                                                  "conditionGroup": ""
                                                              }
                                                          ]
                                                      },
                                                      {
                                                          "componentName": "FDP",
                                                          "id": "node_oclfjqcf7z2l",
                                                          "props": {},
                                                          "title": "段落",
                                                          "hidden": false,
                                                          "isLocked": false,
                                                          "condition": true,
                                                          "conditionGroup": "",
                                                          "children": [
                                                              {
                                                                  "componentName": "Button",
                                                                  "id": "node_oclfjqcf7z2k",
                                                                  "props": {
                                                                      "prefix": "next-",
                                                                      "type": "primary",
                                                                      "size": "medium",
                                                                      "htmlType": "button",
                                                                      "component": "button",
                                                                      "children": "constants",
                                                                      "iconSize": "xxs",
                                                                      "loading": false,
                                                                      "text": false,
                                                                      "warning": false,
                                                                      "disabled": false,
                                                                      "ref": "button-4951c2d3",
                                                                      "__events": {
                                                                          "eventDataList": [
                                                                              {
                                                                                  "type": "componentEvent",
                                                                                  "name": "onClick",
                                                                                  "relatedEventName": "onTestConstantsButtonClicked"
                                                                              }
                                                                          ],
                                                                          "eventList": [
                                                                              {
                                                                                  "name": "onClick",
                                                                                  "description": "点击按钮的回调\n@param {Object} e Event Object",
                                                                                  "disabled": true
                                                                              },
                                                                              {
                                                                                  "name": "onMouseUp",
                                                                                  "disabled": false
                                                                              }
                                                                          ]
                                                                      },
                                                                      "onClick": {
                                                                          "type": "JSFunction",
                                                                          "value": "function(){this.onTestConstantsButtonClicked.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                                                      }
                                                                  },
                                                                  "docId": "doclawu71ac",
                                                                  "hidden": false,
                                                                  "title": "",
                                                                  "isLocked": false,
                                                                  "condition": true,
                                                                  "conditionGroup": ""
                                                              },
                                                              {
                                                                  "componentName": "Button",
                                                                  "id": "node_oclfjqcf7z2o",
                                                                  "props": {
                                                                      "prefix": "next-",
                                                                      "type": "primary",
                                                                      "size": "medium",
                                                                      "htmlType": "button",
                                                                      "component": "button",
                                                                      "children": "utils",
                                                                      "iconSize": "xxs",
                                                                      "loading": false,
                                                                      "text": false,
                                                                      "warning": false,
                                                                      "disabled": false,
                                                                      "__events": {
                                                                          "eventDataList": [
                                                                              {
                                                                                  "type": "componentEvent",
                                                                                  "name": "onClick",
                                                                                  "relatedEventName": "onTestUtilsButtonClicked"
                                                                              }
                                                                          ],
                                                                          "eventList": [
                                                                              {
                                                                                  "name": "onClick",
                                                                                  "description": "点击按钮的回调\n@param {Object} e Event Object",
                                                                                  "disabled": true
                                                                              },
                                                                              {
                                                                                  "name": "onMouseUp",
                                                                                  "disabled": false
                                                                              }
                                                                          ]
                                                                      },
                                                                      "onClick": {
                                                                          "type": "JSFunction",
                                                                          "value": "function(){this.onTestUtilsButtonClicked.apply(this,Array.prototype.slice.call(arguments).concat([])) }"
                                                                      }
                                                                  },
                                                                  "docId": "doclawu71ac",
                                                                  "hidden": false,
                                                                  "title": "",
                                                                  "isLocked": false,
                                                                  "condition": true,
                                                                  "conditionGroup": ""
                                                              }
                                                          ]
                                                      }
                                                  ]
                                              }
                                          ]
                                      }
                                  ]
                              },
                              {
                                  "componentName": "FDBlock",
                                  "id": "node_oclfjqcf7z3g",
                                  "props": {
                                      "mode": "transparent",
                                      "span": 12,
                                      "style": {
                                          "backgroundColor": "rgba(255,255,255,1)",
                                          "minHeight": ""
                                      }
                                  },
                                  "title": "区块",
                                  "hidden": false,
                                  "isLocked": false,
                                  "condition": true,
                                  "conditionGroup": "",
                                  "children": [
                                      {
                                          "componentName": "FDCell",
                                          "id": "node_oclfjqcf7z3h",
                                          "props": {
                                              "align": "left",
                                              "verAlign": "top",
                                              "style": {
                                                  "backgroundColor": "rgba(255,255,255,1)"
                                              }
                                          },
                                          "title": "容器",
                                          "hidden": false,
                                          "isLocked": false,
                                          "condition": true,
                                          "conditionGroup": "",
                                          "children": [
                                              {
                                                  "componentName": "FDP",
                                                  "id": "node_oclfjqcf7z43",
                                                  "props": {},
                                                  "title": "段落",
                                                  "hidden": false,
                                                  "isLocked": false,
                                                  "condition": true,
                                                  "conditionGroup": "",
                                                  "children": [
                                                      {
                                                          "componentName": "NextText",
                                                          "id": "node_oclfjqcf7z42",
                                                          "props": {
                                                              "type": "inherit",
                                                              "children": "Powered By Lowcode Engine",
                                                              "mark": false,
                                                              "code": false,
                                                              "delete": false,
                                                              "underline": false,
                                                              "strong": false,
                                                              "prefix": "",
                                                              "classname": "",
                                                              "style": {
                                                                  "height": "30px",
                                                                  "lineHeight": "30px",
                                                                  "fontSize": "20px"
                                                              }
                                                          },
                                                          "hidden": false,
                                                          "title": "",
                                                          "isLocked": false,
                                                          "condition": true,
                                                          "conditionGroup": ""
                                                      }
                                                  ]
                                              }
                                          ]
                                      }
                                  ]
                              }
                          ]
                      }
                  ]
              }
          ]
      }
  ],
  "i18n": {
      "zh-CN": {
          "i18n-jwg27yo4": "你好 ",
          "i18n-jwg27yo3": "{name} 博士"
      },
      "en-US": {
          "i18n-jwg27yo4": "Hello ",
          "i18n-jwg27yo3": "Doctor {name}"
      }
  }
}