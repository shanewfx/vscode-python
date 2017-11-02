import { Uri, workspace } from 'vscode';
import { InterpreterManager } from '../..';
import { WorkspacePythonPath } from '../../contracts';
import { IPythonPathUpdaterService } from '../types';

export class GlobalPythonPathUpdaterService implements IPythonPathUpdaterService {
    public async updatePythonPath(pythonPath: string): Promise<void> {
        const pythonConfig = workspace.getConfiguration('python');
        const pythonPathValue = pythonConfig.inspect<string>('pythonPath');

        if (pythonPathValue && pythonPathValue.globalValue === pythonPath) {
            return;
        }
        await pythonConfig.update('pythonPath', pythonPath, true);
    }
}
