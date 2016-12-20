import { TestMessage, ResponseRequest, TestMessagePairs } from './test-message';

// see:
// flow-1.console.log();
let msgs: TestMessagePairs = new TestMessagePairs();

// Content-Length: 309
//
// {"jsonrpc":"2.0","id":0,"method":"initialize","params":{"rootPath":"/Users/mbana/go/src/github.com/sourcegraph/go-langserver/langserver","capabilities":{"dynamicRegistration":true,"workspace":{"applyEdit":true},"textDocument":{"willSaveNotification":true,"willSaveWaitUntilRequest":true}},"trace":"messages"}}
let reqInit = new TestMessage([67,111,110,116,101,110,116,45,76,101,110,103,116,104,58,32,51,48,57,13,10,13,10,123,34,106,115,111,110,114,112,99,34,58,34,50,46,48,34,44,34,105,100,34,58,48,44,34,109,101,116,104,111,100,34,58,34,105,110,105,116,105,97,108,105,122,101,34,44,34,112,97,114,97,109,115,34,58,123,34,114,111,111,116,80,97,116,104,34,58,34,47,85,115,101,114,115,47,109,98,97,110,97,47,103,111,47,115,114,99,47,103,105,116,104,117,98,46,99,111,109,47,115,111,117,114,99,101,103,114,97,112,104,47,103,111,45,108,97,110,103,115,101,114,118,101,114,47,108,97,110,103,115,101,114,118,101,114,34,44,34,99,97,112,97,98,105,108,105,116,105,101,115,34,58,123,34,100,121,110,97,109,105,99,82,101,103,105,115,116,114,97,116,105,111,110,34,58,116,114,117,101,44,34,119,111,114,107,115,112,97,99,101,34,58,123,34,97,112,112,108,121,69,100,105,116,34,58,116,114,117,101,125,44,34,116,101,120,116,68,111,99,117,109,101,110,116,34,58,123,34,119,105,108,108,83,97,118,101,78,111,116,105,102,105,99,97,116,105,111,110,34,58,116,114,117,101,44,34,119,105,108,108,83,97,118,101,87,97,105,116,85,110,116,105,108,82,101,113,117,101,115,116,34,58,116,114,117,101,125,125,44,34,116,114,97,99,101,34,58,34,109,101,115,115,97,103,101,115,34,125,125]);
// Content-Length: 270
// Content-Type: application/vscode-jsonrpc; charset=utf8
//
// {"id":0,"result":{"capabilities":{"textDocumentSync":1,"hoverProvider":true,"definitionProvider":true,"referencesProvider":true,"documentSymbolProvider":true,"workspaceSymbolProvider":true,"xworkspaceReferencesProvider":true,"xdefinitionProvider":true}},"jsonrpc":"2.0"}
let resInit = new TestMessage([67,111,110,116,101,110,116,45,76,101,110,103,116,104,58,32,50,55,48,13,10,67,111,110,116,101,110,116,45,84,121,112,101,58,32,97,112,112,108,105,99,97,116,105,111,110,47,118,115,99,111,100,101,45,106,115,111,110,114,112,99,59,32,99,104,97,114,115,101,116,61,117,116,102,56,13,10,13,10,123,34,105,100,34,58,48,44,34,114,101,115,117,108,116,34,58,123,34,99,97,112,97,98,105,108,105,116,105,101,115,34,58,123,34,116,101,120,116,68,111,99,117,109,101,110,116,83,121,110,99,34,58,49,44,34,104,111,118,101,114,80,114,111,118,105,100,101,114,34,58,116,114,117,101,44,34,100,101,102,105,110,105,116,105,111,110,80,114,111,118,105,100,101,114,34,58,116,114,117,101,44,34,114,101,102,101,114,101,110,99,101,115,80,114,111,118,105,100,101,114,34,58,116,114,117,101,44,34,100,111,99,117,109,101,110,116,83,121,109,98,111,108,80,114,111,118,105,100,101,114,34,58,116,114,117,101,44,34,119,111,114,107,115,112,97,99,101,83,121,109,98,111,108,80,114,111,118,105,100,101,114,34,58,116,114,117,101,44,34,120,119,111,114,107,115,112,97,99,101,82,101,102,101,114,101,110,99,101,115,80,114,111,118,105,100,101,114,34,58,116,114,117,101,44,34,120,100,101,102,105,110,105,116,105,111,110,80,114,111,118,105,100,101,114,34,58,116,114,117,101,125,125,44,34,106,115,111,110,114,112,99,34,58,34,50,46,48,34,125]);
msgs.addPair(reqInit, resInit);

// monaco-output-channel.js:13 LanguageClient:langserver-antha -  [Trace - 3:48:02 PM] Sending notification 'textDocument/didOpen'.
// Content-Length: 2470
//
// {"jsonrpc":"2.0","method":"textDocument/didOpen","params":{"textDocument":{"uri":"file:///Users/mbana/go/src/github.com/sourcegraph/go-langserver/langserver/modes/websocket.go","languageId":"go","version":1,"text":"package modes\n\nimport (\n\t\"context\"\n\t\"log\"\n\t\"net/http\"\n\n\t\"github.com/gorilla/websocket\"\n\n\t\"github.com/sourcegraph/go-langserver/langserver\"\n\t\"github.com/sourcegraph/jsonrpc2\"\n\tjsonrpc2ws \"github.com/sourcegraph/jsonrpc2/websocket\"\n)\n\nvar (\n\tctx      = context.Background()\n\tupgrader = websocket.Upgrader{\n\t\tReadBufferSize:  1024,\n\t\tWriteBufferSize: 1024,\n\t\t// disable security for now\n\t\t// \"If CheckOrigin returns false, you will get the error you described. By default, it returns false if the request is cross-origin.\"\n\t\tCheckOrigin: func(r *http.Request) bool {\n\t\t\treturn true\n\t\t},\n\t}\n)\n\n// WebSocket listener on addr with connOpts.\nfunc WebSocket(addr string, connOpt []jsonrpc2.ConnOpt) (err error) {\n\tlog.Printf(\"ws ======== langserver-go: websocket listening on: %s\", addr)\n\n\thttp.HandleFunc(\"/\", func(w http.ResponseWriter, r *http.Request) {\n\t\tlog.Printf(\"ws ======== langserver-go: conn upgrade \t\t\t\t\t- w: %p, r: %p\", &w, r)\n\n\t\tconn, err := upgrader.Upgrade(w, r, nil)\n\t\tif err != nil {\n\t\t\tlog.Printf(\"ws ======== langserver-go: upgrade err  conn: %p\", conn)\n\t\t\tlog.Printf(\"ws ======== langserver-go: upgraded err    w: %p\", &w)\n\t\t\tlog.Printf(\"ws ======== langserver-go: upgraded err    r: %p\", r)\n\t\t\treturn\n\t\t}\n\n\t\tlog.Printf(\"ws ======== langserver-go: upgraded     conn: %p\", conn)\n\t\tlog.Printf(\"ws ======== langserver-go: upgraded        w: %p\", &w)\n\t\tlog.Printf(\"ws ======== langserver-go: upgraded        r: %p\", r)\n\n\t\twebSocketHandler(w, r, conn, connOpt)\n\n\t\tlog.Printf(\"ws ======== langserver-go: done         conn: %p\", conn)\n\t\tlog.Printf(\"ws ======== langserver-go: done            w: %p\", &w)\n\t\tlog.Printf(\"ws ======== langserver-go: done            r: %p\", r)\n\t})\n\n\terr = http.ListenAndServe(addr, nil)\n\n\treturn\n}\n\nfunc webSocketHandler(w http.ResponseWriter, r *http.Request, conn *websocket.Conn, connOpt []jsonrpc2.ConnOpt) {\n\tfor {\n\t\tstream := jsonrpc2ws.NewObjectStream(conn, jsonrpc2.VSCodeObjectCodec{})\n\t\tconn := jsonrpc2.NewConn(\n\t\t\tctx,\n\t\t\tstream,\n\t\t\tlangserver.NewHandler(),\n\t\t\tconnOpt...)\n\t\t<-conn.DisconnectNotify()\n\t}\n}\n"}}}
let reqTextDocumentDidOpen = new TestMessage([67,111,110,116,101,110,116,45,76,101,110,103,116,104,58,32,50,52,55,48,13,10,13,10,123,34,106,115,111,110,114,112,99,34,58,34,50,46,48,34,44,34,109,101,116,104,111,100,34,58,34,116,101,120,116,68,111,99,117,109,101,110,116,47,100,105,100,79,112,101,110,34,44,34,112,97,114,97,109,115,34,58,123,34,116,101,120,116,68,111,99,117,109,101,110,116,34,58,123,34,117,114,105,34,58,34,102,105,108,101,58,47,47,47,85,115,101,114,115,47,109,98,97,110,97,47,103,111,47,115,114,99,47,103,105,116,104,117,98,46,99,111,109,47,115,111,117,114,99,101,103,114,97,112,104,47,103,111,45,108,97,110,103,115,101,114,118,101,114,47,108,97,110,103,115,101,114,118,101,114,47,109,111,100,101,115,47,119,101,98,115,111,99,107,101,116,46,103,111,34,44,34,108,97,110,103,117,97,103,101,73,100,34,58,34,103,111,34,44,34,118,101,114,115,105,111,110,34,58,49,44,34,116,101,120,116,34,58,34,112,97,99,107,97,103,101,32,109,111,100,101,115,92,110,92,110,105,109,112,111,114,116,32,40,92,110,92,116,92,34,99,111,110,116,101,120,116,92,34,92,110,92,116,92,34,108,111,103,92,34,92,110,92,116,92,34,110,101,116,47,104,116,116,112,92,34,92,110,92,110,92,116,92,34,103,105,116,104,117,98,46,99,111,109,47,103,111,114,105,108,108,97,47,119,101,98,115,111,99,107,101,116,92,34,92,110,92,110,92,116,92,34,103,105,116,104,117,98,46,99,111,109,47,115,111,117,114,99,101,103,114,97,112,104,47,103,111,45,108,97,110,103,115,101,114,118,101,114,47,108,97,110,103,115,101,114,118,101,114,92,34,92,110,92,116,92,34,103,105,116,104,117,98,46,99,111,109,47,115,111,117,114,99,101,103,114,97,112,104,47,106,115,111,110,114,112,99,50,92,34,92,110,92,116,106,115,111,110,114,112,99,50,119,115,32,92,34,103,105,116,104,117,98,46,99,111,109,47,115,111,117,114,99,101,103,114,97,112,104,47,106,115,111,110,114,112,99,50,47,119,101,98,115,111,99,107,101,116,92,34,92,110,41,92,110,92,110,118,97,114,32,40,92,110,92,116,99,116,120,32,32,32,32,32,32,61,32,99,111,110,116,101,120,116,46,66,97,99,107,103,114,111,117,110,100,40,41,92,110,92,116,117,112,103,114,97,100,101,114,32,61,32,119,101,98,115,111,99,107,101,116,46,85,112,103,114,97,100,101,114,123,92,110,92,116,92,116,82,101,97,100,66,117,102,102,101,114,83,105,122,101,58,32,32,49,48,50,52,44,92,110,92,116,92,116,87,114,105,116,101,66,117,102,102,101,114,83,105,122,101,58,32,49,48,50,52,44,92,110,92,116,92,116,47,47,32,100,105,115,97,98,108,101,32,115,101,99,117,114,105,116,121,32,102,111,114,32,110,111,119,92,110,92,116,92,116,47,47,32,92,34,73,102,32,67,104,101,99,107,79,114,105,103,105,110,32,114,101,116,117,114,110,115,32,102,97,108,115,101,44,32,121,111,117,32,119,105,108,108,32,103,101,116,32,116,104,101,32,101,114,114,111,114,32,121,111,117,32,100,101,115,99,114,105,98,101,100,46,32,66,121,32,100,101,102,97,117,108,116,44,32,105,116,32,114,101,116,117,114,110,115,32,102,97,108,115,101,32,105,102,32,116,104,101,32,114,101,113,117,101,115,116,32,105,115,32,99,114,111,115,115,45,111,114,105,103,105,110,46,92,34,92,110,92,116,92,116,67,104,101,99,107,79,114,105,103,105,110,58,32,102,117,110,99,40,114,32,42,104,116,116,112,46,82,101,113,117,101,115,116,41,32,98,111,111,108,32,123,92,110,92,116,92,116,92,116,114,101,116,117,114,110,32,116,114,117,101,92,110,92,116,92,116,125,44,92,110,92,116,125,92,110,41,92,110,92,110,47,47,32,87,101,98,83,111,99,107,101,116,32,108,105,115,116,101,110,101,114,32,111,110,32,97,100,100,114,32,119,105,116,104,32,99,111,110,110,79,112,116,115,46,92,110,102,117,110,99,32,87,101,98,83,111,99,107,101,116,40,97,100,100,114,32,115,116,114,105,110,103,44,32,99,111,110,110,79,112,116,32,91,93,106,115,111,110,114,112,99,50,46,67,111,110,110,79,112,116,41,32,40,101,114,114,32,101,114,114,111,114,41,32,123,92,110,92,116,108,111,103,46,80,114,105,110,116,102,40,92,34,119,115,32,61,61,61,61,61,61,61,61,32,108,97,110,103,115,101,114,118,101,114,45,103,111,58,32,119,101,98,115,111,99,107,101,116,32,108,105,115,116,101,110,105,110,103,32,111,110,58,32,37,115,92,34,44,32,97,100,100,114,41,92,110,92,110,92,116,104,116,116,112,46,72,97,110,100,108,101,70,117,110,99,40,92,34,47,92,34,44,32,102,117,110,99,40,119,32,104,116,116,112,46,82,101,115,112,111,110,115,101,87,114,105,116,101,114,44,32,114,32,42,104,116,116,112,46,82,101,113,117,101,115,116,41,32,123,92,110,92,116,92,116,108,111,103,46,80,114,105,110,116,102,40,92,34,119,115,32,61,61,61,61,61,61,61,61,32,108,97,110,103,115,101,114,118,101,114,45,103,111,58,32,99,111,110,110,32,117,112,103,114,97,100,101,32,92,116,92,116,92,116,92,116,92,116,45,32,119,58,32,37,112,44,32,114,58,32,37,112,92,34,44,32,38,119,44,32,114,41,92,110,92,110,92,116,92,116,99,111,110,110,44,32,101,114,114,32,58,61,32,117,112,103,114,97,100,101,114,46,85,112,103,114,97,100,101,40,119,44,32,114,44,32,110,105,108,41,92,110,92,116,92,116,105,102,32,101,114,114,32,33,61,32,110,105,108,32,123,92,110,92,116,92,116,92,116,108,111,103,46,80,114,105,110,116,102,40,92,34,119,115,32,61,61,61,61,61,61,61,61,32,108,97,110,103,115,101,114,118,101,114,45,103,111,58,32,117,112,103,114,97,100,101,32,101,114,114,32,32,99,111,110,110,58,32,37,112,92,34,44,32,99,111,110,110,41,92,110,92,116,92,116,92,116,108,111,103,46,80,114,105,110,116,102,40,92,34,119,115,32,61,61,61,61,61,61,61,61,32,108,97,110,103,115,101,114,118,101,114,45,103,111,58,32,117,112,103,114,97,100,101,100,32,101,114,114,32,32,32,32,119,58,32,37,112,92,34,44,32,38,119,41,92,110,92,116,92,116,92,116,108,111,103,46,80,114,105,110,116,102,40,92,34,119,115,32,61,61,61,61,61,61,61,61,32,108,97,110,103,115,101,114,118,101,114,45,103,111,58,32,117,112,103,114,97,100,101,100,32,101,114,114,32,32,32,32,114,58,32,37,112,92,34,44,32,114,41,92,110,92,116,92,116,92,116,114,101,116,117,114,110,92,110,92,116,92,116,125,92,110,92,110,92,116,92,116,108,111,103,46,80,114,105,110,116,102,40,92,34,119,115,32,61,61,61,61,61,61,61,61,32,108,97,110,103,115,101,114,118,101,114,45,103,111,58,32,117,112,103,114,97,100,101,100,32,32,32,32,32,99,111,110,110,58,32,37,112,92,34,44,32,99,111,110,110,41,92,110,92,116,92,116,108,111,103,46,80,114,105,110,116,102,40,92,34,119,115,32,61,61,61,61,61,61,61,61,32,108,97,110,103,115,101,114,118,101,114,45,103,111,58,32,117,112,103,114,97,100,101,100,32,32,32,32,32,32,32,32,119,58,32,37,112,92,34,44,32,38,119,41,92,110,92,116,92,116,108,111,103,46,80,114,105,110,116,102,40,92,34,119,115,32,61,61,61,61,61,61,61,61,32,108,97,110,103,115,101,114,118,101,114,45,103,111,58,32,117,112,103,114,97,100,101,100,32,32,32,32,32,32,32,32,114,58,32,37,112,92,34,44,32,114,41,92,110,92,110,92,116,92,116,119,101,98,83,111,99,107,101,116,72,97,110,100,108,101,114,40,119,44,32,114,44,32,99,111,110,110,44,32,99,111,110,110,79,112,116,41,92,110,92,110,92,116,92,116,108,111,103,46,80,114,105,110,116,102,40,92,34,119,115,32,61,61,61,61,61,61,61,61,32,108,97,110,103,115,101,114,118,101,114,45,103,111,58,32,100,111,110,101,32,32,32,32,32,32,32,32,32,99,111,110,110,58,32,37,112,92,34,44,32,99,111,110,110,41,92,110,92,116,92,116,108,111,103,46,80,114,105,110,116,102,40,92,34,119,115,32,61,61,61,61,61,61,61,61,32,108,97,110,103,115,101,114,118,101,114,45,103,111,58,32,100,111,110,101,32,32,32,32,32,32,32,32,32,32,32,32,119,58,32,37,112,92,34,44,32,38,119,41,92,110,92,116,92,116,108,111,103,46,80,114,105,110,116,102,40,92,34,119,115,32,61,61,61,61,61,61,61,61,32,108,97,110,103,115,101,114,118,101,114,45,103,111,58,32,100,111,110,101,32,32,32,32,32,32,32,32,32,32,32,32,114,58,32,37,112,92,34,44,32,114,41,92,110,92,116,125,41,92,110,92,110,92,116,101,114,114,32,61,32,104,116,116,112,46,76,105,115,116,101,110,65,110,100,83,101,114,118,101,40,97,100,100,114,44,32,110,105,108,41,92,110,92,110,92,116,114,101,116,117,114,110,92,110,125,92,110,92,110,102,117,110,99,32,119,101,98,83,111,99,107,101,116,72,97,110,100,108,101,114,40,119,32,104,116,116,112,46,82,101,115,112,111,110,115,101,87,114,105,116,101,114,44,32,114,32,42,104,116,116,112,46,82,101,113,117,101,115,116,44,32,99,111,110,110,32,42,119,101,98,115,111,99,107,101,116,46,67,111,110,110,44,32,99,111,110,110,79,112,116,32,91,93,106,115,111,110,114,112,99,50,46,67,111,110,110,79,112,116,41,32,123,92,110,92,116,102,111,114,32,123,92,110,92,116,92,116,115,116,114,101,97,109,32,58,61,32,106,115,111,110,114,112,99,50,119,115,46,78,101,119,79,98,106,101,99,116,83,116,114,101,97,109,40,99,111,110,110,44,32,106,115,111,110,114,112,99,50,46,86,83,67,111,100,101,79,98,106,101,99,116,67,111,100,101,99,123,125,41,92,110,92,116,92,116,99,111,110,110,32,58,61,32,106,115,111,110,114,112,99,50,46,78,101,119,67,111,110,110,40,92,110,92,116,92,116,92,116,99,116,120,44,92,110,92,116,92,116,92,116,115,116,114,101,97,109,44,92,110,92,116,92,116,92,116,108,97,110,103,115,101,114,118,101,114,46,78,101,119,72,97,110,100,108,101,114,40,41,44,92,110,92,116,92,116,92,116,99,111,110,110,79,112,116,46,46,46,41,92,110,92,116,92,116,60,45,99,111,110,110,46,68,105,115,99,111,110,110,101,99,116,78,111,116,105,102,121,40,41,92,110,92,116,125,92,110,125,92,110,34,125,125,125]);
let resTextDocumentDidOpen = null;
msgs.addPair(reqTextDocumentDidOpen, resTextDocumentDidOpen);

// monaco-output-channel.js:13 LanguageClient:langserver-antha -  [Trace - 3:48:13 PM] Sending request 'textDocument/hover - (1)'.
// Content-Length: 222
//
// {"jsonrpc":"2.0","id":1,"method":"textDocument/hover","params":{"textDocument":{"uri":"file:///Users/mbana/go/src/github.com/sourcegraph/go-langserver/langserver/modes/websocket.go"},"position":{"line":60,"character":35}}}
let reqTextDocumentHover = new TestMessage([67,111,110,116,101,110,116,45,76,101,110,103,116,104,58,32,50,50,50,13,10,13,10,123,34,106,115,111,110,114,112,99,34,58,34,50,46,48,34,44,34,105,100,34,58,49,44,34,109,101,116,104,111,100,34,58,34,116,101,120,116,68,111,99,117,109,101,110,116,47,104,111,118,101,114,34,44,34,112,97,114,97,109,115,34,58,123,34,116,101,120,116,68,111,99,117,109,101,110,116,34,58,123,34,117,114,105,34,58,34,102,105,108,101,58,47,47,47,85,115,101,114,115,47,109,98,97,110,97,47,103,111,47,115,114,99,47,103,105,116,104,117,98,46,99,111,109,47,115,111,117,114,99,101,103,114,97,112,104,47,103,111,45,108,97,110,103,115,101,114,118,101,114,47,108,97,110,103,115,101,114,118,101,114,47,109,111,100,101,115,47,119,101,98,115,111,99,107,101,116,46,103,111,34,125,44,34,112,111,115,105,116,105,111,110,34,58,123,34,108,105,110,101,34,58,54,48,44,34,99,104,97,114,97,99,116,101,114,34,58,51,53,125,125,125]);

// Content-Length: 375
// Content-Type: application/vscode-jsonrpc; charset=utf8
//
// {"id":1,"result":{"contents":[{"language":"go","value":"func NewObjectStream(conn *Conn, codec ObjectCodec) ObjectStream"},{"language":"markdown","value":"NewObjectStream creates a new jsonrpc2.ObjectStream for sending and receiving JSON-RPC 2.0 objects over a WebSocket. \n\n"}],"range":{"start":{"line":60,"character":23},"end":{"line":60,"character":38}}},"jsonrpc":"2.0"}
// monaco-output-channel.js:13 LanguageClient:langserver-antha -  [Trace - 3:48:22 PM] Received response 'textDocument/hover - (1)' in 9002ms.
let resTextDocumentHover = new TestMessage([67,111,110,116,101,110,116,45,76,101,110,103,116,104,58,32,51,55,53,13,10,67,111,110,116,101,110,116,45,84,121,112,101,58,32,97,112,112,108,105,99,97,116,105,111,110,47,118,115,99,111,100,101,45,106,115,111,110,114,112,99,59,32,99,104,97,114,115,101,116,61,117,116,102,56,13,10,13,10,123,34,105,100,34,58,49,44,34,114,101,115,117,108,116,34,58,123,34,99,111,110,116,101,110,116,115,34,58,91,123,34,108,97,110,103,117,97,103,101,34,58,34,103,111,34,44,34,118,97,108,117,101,34,58,34,102,117,110,99,32,78,101,119,79,98,106,101,99,116,83,116,114,101,97,109,40,99,111,110,110,32,42,67,111,110,110,44,32,99,111,100,101,99,32,79,98,106,101,99,116,67,111,100,101,99,41,32,79,98,106,101,99,116,83,116,114,101,97,109,34,125,44,123,34,108,97,110,103,117,97,103,101,34,58,34,109,97,114,107,100,111,119,110,34,44,34,118,97,108,117,101,34,58,34,78,101,119,79,98,106,101,99,116,83,116,114,101,97,109,32,99,114,101,97,116,101,115,32,97,32,110,101,119,32,106,115,111,110,114,112,99,50,46,79,98,106,101,99,116,83,116,114,101,97,109,32,102,111,114,32,115,101,110,100,105,110,103,32,97,110,100,32,114,101,99,101,105,118,105,110,103,32,74,83,79,78,45,82,80,67,32,50,46,48,32,111,98,106,101,99,116,115,32,111,118,101,114,32,97,32,87,101,98,83,111,99,107,101,116,46,32,92,110,92,110,34,125,93,44,34,114,97,110,103,101,34,58,123,34,115,116,97,114,116,34,58,123,34,108,105,110,101,34,58,54,48,44,34,99,104,97,114,97,99,116,101,114,34,58,50,51,125,44,34,101,110,100,34,58,123,34,108,105,110,101,34,58,54,48,44,34,99,104,97,114,97,99,116,101,114,34,58,51,56,125,125,125,44,34,106,115,111,110,114,112,99,34,58,34,50,46,48,34,125]);
msgs.addPair(reqTextDocumentHover, resTextDocumentDidOpen);

// monaco-output-channel.js:13 LanguageClient:langserver-antha -  [Trace - 3:48:24 PM] Sending request 'textDocument/hover - (2)'.
//
// Content-Length: 222
//
// {"jsonrpc":"2.0","id":2,"method":"textDocument/hover","params":{"textDocument":{"uri":"file:///Users/mbana/go/src/github.com/sourcegraph/go-langserver/langserver/modes/websocket.go"},"position":{"line":61,"character":24}}}
let reqTextDocumentHover_2 = new TestMessage([252, 67,111,110,116,101,110,116,45,76,101,110,103,116,104,58,32,50,50,50,13,10,13,10,123,34,106,115,111,110,114,112,99,34,58,34,50,46,48,34,44,34,105,100,34,58,50,44,34,109,101,116,104,111,100,34,58,34,116,101,120,116,68,111,99,117,109,101,110,116,47,104,111,118,101,114,34,44,34,112,97,114,97,109,115,34,58,123,34,116,101,120,116,68,111,99,117,109,101,110,116,34,58,123,34,117,114,105,34,58,34,102,105,108,101,58,47,47,47,85,115,101,114,115,47,109,98,97,110,97,47,103,111,47,115,114,99,47,103,105,116,104,117,98,46,99,111,109,47,115,111,117,114,99,101,103,114,97,112,104,47,103,111,45,108,97,110,103,115,101,114,118,101,114,47,108,97,110,103,115,101,114,118,101,114,47,109,111,100,101,115,47,119,101,98,115,111,99,107,101,116,46,103,111,34,125,44,34,112,111,115,105,116,105,111,110,34,58,123,34,108,105,110,101,34,58,54,49,44,34,99,104,97,114,97,99,116,101,114,34,58,50,52,125,125,125]);

// monaco-output-channel.js:13 LanguageClient:langserver-antha -  [Trace - 3:48:24 PM] Received response 'textDocument/hover - (2)' in 21ms.
//
// Content-Length: 595
// Content-Type: application/vscode-jsonrpc; charset=utf8
//
// {"id":2,"result":{"contents":[{"language":"go","value":"func NewConn(ctx Context, stream ObjectStream, h Handler, opt ...ConnOpt) *Conn"},{"language":"markdown","value":"NewConn creates a new JSON-RPC client/server connection using the given ReadWriteCloser (typically a TCP connection or stdio). The JSON-RPC protocol is symmetric, so a Conn runs on both ends of a client-server connection. \n\nNewClient consumes conn, so you should call Close on the returned client not on the given conn. \n\n"}],"range":{"start":{"line":61,"character":19},"end":{"line":61,"character":26}}},"jsonrpc":"2.0"}
let resTextDocumentHover_2 = new TestMessage([131, 67,111,110,116,101,110,116,45,76,101,110,103,116,104,58,32,53,57,53,13,10,67,111,110,116,101,110,116,45,84,121,112,101,58,32,97,112,112,108,105,99,97,116,105,111,110,47,118,115,99,111,100,101,45,106,115,111,110,114,112,99,59,32,99,104,97,114,115,101,116,61,117,116,102,56,13,10,13,10,123,34,105,100,34,58,50,44,34,114,101,115,117,108,116,34,58,123,34,99,111,110,116,101,110,116,115,34,58,91,123,34,108,97,110,103,117,97,103,101,34,58,34,103,111,34,44,34,118,97,108,117,101,34,58,34,102,117,110,99,32,78,101,119,67,111,110,110,40,99,116,120,32,67,111,110,116,101,120,116,44,32,115,116,114,101,97,109,32,79,98,106,101,99,116,83,116,114,101,97,109,44,32,104,32,72,97,110,100,108,101,114,44,32,111,112,116,32,46,46,46,67,111,110,110,79,112,116,41,32,42,67,111,110,110,34,125,44,123,34,108,97,110,103,117,97,103,101,34,58,34,109,97,114,107,100,111,119,110,34,44,34,118,97,108,117,101,34,58,34,78,101,119,67,111,110,110,32,99,114,101,97,116,101,115,32,97,32,110,101,119,32,74,83,79,78,45,82,80,67,32,99,108,105,101,110,116,47,115,101,114,118,101,114,32,99,111,110,110,101,99,116,105,111,110,32,117,115,105,110,103,32,116,104,101,32,103,105,118,101,110,32,82,101,97,100,87,114,105,116,101,67,108,111,115,101,114,32,40,116,121,112,105,99,97,108,108,121,32,97,32,84,67,80,32,99,111,110,110,101,99,116,105,111,110,32,111,114,32,115,116,100,105,111,41,46,32,84,104,101,32,74,83,79,78,45,82,80,67,32,112,114,111,116,111,99,111,108,32,105,115,32,115,121,109,109,101,116,114,105,99,44,32,115,111,32,97,32,67,111,110,110,32,114,117,110,115,32,111,110,32,98,111,116,104,32,101,110,100,115,32,111,102,32,97,32,99,108,105,101,110,116,45,115,101,114,118,101,114,32,99,111,110,110,101,99,116,105,111,110,46,32,92,110,92,110,78,101,119,67,108,105,101,110,116,32,99,111,110,115,117,109,101,115,32,99,111,110,110,44,32,115,111,32,121,111,117,32,115,104,111,117,108,100,32,99,97,108,108,32,67,108,111,115,101,32,111,110,32,116,104,101,32,114,101,116,117,114,110,101,100,32,99,108,105,101,110,116,32,110,111,116,32,111,110,32,116,104,101,32,103,105,118,101,110,32,99,111,110,110,46,32,92,110,92,110,34,125,93,44,34,114,97,110,103,101,34,58,123,34,115,116,97,114,116,34,58,123,34,108,105,110,101,34,58,54,49,44,34,99,104,97,114,97,99,116,101,114,34,58,49,57,125,44,34,101,110,100,34,58,123,34,108,105,110,101,34,58,54,49,44,34,99,104,97,114,97,99,116,101,114,34,58,50,54,125,125,125,44,34,106,115,111,110,114,112,99,34,58,34,50,46,48,34,125]);
msgs.addPair(reqTextDocumentHover_2, resTextDocumentHover_2);

// monaco-output-channel.js:13 LanguageClient:langserver-antha -  [Trace - 3:48:26 PM] Sending notification 'textDocument/didOpen'.
//
// Content-Length: 227
//
// {"jsonrpc":"2.0","id":3,"method":"textDocument/definition","params":{"textDocument":{"uri":"file:///Users/mbana/go/src/github.com/sourcegraph/go-langserver/langserver/modes/websocket.go"},"position":{"line":61,"character":24}}}
let reqTextDocumentDefinition = new TestMessage([67,111,110,116,101,110,116,45,76,101,110,103,116,104,58,32,50,50,55,13,10,13,10,123,34,106,115,111,110,114,112,99,34,58,34,50,46,48,34,44,34,105,100,34,58,51,44,34,109,101,116,104,111,100,34,58,34,116,101,120,116,68,111,99,117,109,101,110,116,47,100,101,102,105,110,105,116,105,111,110,34,44,34,112,97,114,97,109,115,34,58,123,34,116,101,120,116,68,111,99,117,109,101,110,116,34,58,123,34,117,114,105,34,58,34,102,105,108,101,58,47,47,47,85,115,101,114,115,47,109,98,97,110,97,47,103,111,47,115,114,99,47,103,105,116,104,117,98,46,99,111,109,47,115,111,117,114,99,101,103,114,97,112,104,47,103,111,45,108,97,110,103,115,101,114,118,101,114,47,108,97,110,103,115,101,114,118,101,114,47,109,111,100,101,115,47,119,101,98,115,111,99,107,101,116,46,103,111,34,125,44,34,112,111,115,105,116,105,111,110,34,58,123,34,108,105,110,101,34,58,54,49,44,34,99,104,97,114,97,99,116,101,114,34,58,50,52,125,125,125]);
// monaco-output-channel.js:13 LanguageClient:langserver-antha -  [Trace - 3:48:26 PM] Received response 'textDocument/definition - (3)' in 67ms.
// Content-Length: 194
// Content-Type: application/vscode-jsonrpc; charset=utf8
//
// {"id":3,"result":[{"uri":"file:///Users/mbana/go/src/github.com/sourcegraph/jsonrpc2/jsonrpc2.go","range":{"start":{"line":274,"character":5},"end":{"line":274,"character":5}}}],"jsonrpc":"2.0"}
let resTextDocumentDefinition = new TestMessage([67,111,110,116,101,110,116,45,76,101,110,103,116,104,58,32,49,57,52,13,10,67,111,110,116,101,110,116,45,84,121,112,101,58,32,97,112,112,108,105,99,97,116,105,111,110,47,118,115,99,111,100,101,45,106,115,111,110,114,112,99,59,32,99,104,97,114,115,101,116,61,117,116,102,56,13,10,13,10,123,34,105,100,34,58,51,44,34,114,101,115,117,108,116,34,58,91,123,34,117,114,105,34,58,34,102,105,108,101,58,47,47,47,85,115,101,114,115,47,109,98,97,110,97,47,103,111,47,115,114,99,47,103,105,116,104,117,98,46,99,111,109,47,115,111,117,114,99,101,103,114,97,112,104,47,106,115,111,110,114,112,99,50,47,106,115,111,110,114,112,99,50,46,103,111,34,44,34,114,97,110,103,101,34,58,123,34,115,116,97,114,116,34,58,123,34,108,105,110,101,34,58,50,55,52,44,34,99,104,97,114,97,99,116,101,114,34,58,53,125,44,34,101,110,100,34,58,123,34,108,105,110,101,34,58,50,55,52,44,34,99,104,97,114,97,99,116,101,114,34,58,53,125,125,125,93,44,34,106,115,111,110,114,112,99,34,58,34,50,46,48,34,125]);
msgs.addPair(reqTextDocumentDefinition, resTextDocumentDefinition);


let Flow = {
	msgs
};

export { Flow };