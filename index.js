const express = require('express')
const shell = require('node-powershell');

const app = express()
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'))

const { exec } = require('child_process');
exec('PowerShell.exe Get-EventLog -Newest 5 -LogName "Application"', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});
 
let ps = new shell({
  executionPolicy: 'Bypass',
  noProfile: true
});
 
ps.addCommand('get-location')
ps.invoke()
.then(output => {
  console.log(output);
})
.catch(err => {
  console.log('error: ');
  console.log(err);
  ps.dispose();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))