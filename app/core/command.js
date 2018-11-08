import electronIs from 'electron-is';
import  childProcess from 'child_process';


export default (command) => {
    backgroundProcess(command);

};

function backgroundProcess(command) {
    // var cmd = (electronIs.windows()) ? 'test.bat' : './test.sh';      
    // console.log('cmd:', cmd);
    const cmd = 'echo "The \\$HOME variable is $HOME"';
    var child = childProcess.exec(command); 

    child.on('error', function(err) {
      appendOutput('stderr: <'+err+'>' );
    });

    child.stdout.on('data', function (data) {
      appendOutput(data);
    });

    child.stderr.on('data', function (data) {
      appendOutput('stderr: <'+data+'>' );
    });

    child.on('close', function (code) {
        if (code == 0)
          setStatus('child process complete.');
        else
          setStatus('child process exited with code ' + code);

        // getCommandOutput().style.background = "DarkGray";
    });
}
    function setStatus(status) {
        console.log("status" , status);
    }

    function appendOutput(msg) {
        console.log("append Output", msg);
    }