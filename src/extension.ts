import { ExtensionContext } from "vscode";
import CodeLensProvider from "./CodeLensProvider";
import CommandManager from "./CommandManager";
import EditorListener from "./EditorListener";
import JBangRunner from "./JBangRunner";

export function activate(context: ExtensionContext) {
	
	JBangRunner.initialize(context);
	CommandManager.initialize(context);
	EditorListener.initialize(context);
	CodeLensProvider.initialize(context);
	const packageJson = require('../package.json');
	console.log(`${packageJson.name} ${packageJson.version} is now active!`);
}


export function deactivate() {}
