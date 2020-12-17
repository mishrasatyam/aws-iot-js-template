# aws_iot_js_simple_template 

This is an attempt to easily perform basic tasks for aws iot core - things.
It uses aws-iot-device-sdk-v2 . For more details check
[aws-sdk](https://github.com/aws/aws-iot-device-sdk-js-v2)
## Installation

Use npm to install aws_iot_js_simple.

```bash
npm install aws_iot_js_simple
```
## Prerequesties
Make sure your policy allows node js sdk and topics used by you.eg(topic is sensor here):
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "iot:Publish",
        "iot:Receive"
      ],
      "Resource": [
        "arn:aws:iot:ap-south-1:77********36:client/sdk-nodejs-*",
        "arn:aws:iot:ap-south-1:77********36:topic/sensor"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "iot:Subscribe"
      ],
      "Resource": [
        "arn:aws:iot:ap-south-1:77********36:client/sdk-nodejs-*",
        "arn:aws:iot:ap-south-1:77********36:topicfilter/sensor"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "iot:Connect"
      ],
      "Resource": [
        "arn:aws:iot:ap-south-1:77********36:client/sdk-nodejs-*"
      ]
    }
  ]
}
```
Assuming your thing name is thing1.\
You will get files like root-CA.Crt , thing1.cert.pem, thing1.private.pem, thing1.public.key and start.sh .\
Put all above files(except start.sh) in files folder.\
Edit  a config.json mentioning below fields(easily find endpoint and client_id in start.sh) and file paths.eg:
```json
{
    "endpoint":"a*************-ats.iot.ap-*****-1.amazonaws.com",
    "root_ca_cert":"files/root-CA.crt",
    "pem_cert": "files/thing1.cert.pem",
    "private_key":"files/thing1.private.key",
    "client_id":"sdk-nodejs-b*******-4***-4***-a***-1**********b"
}
```
## Usage

```node 
node index.js
```
It will publish a message sending Temperature. You cn edit index.js to customise data as per your needs.

## License
[MIT](https://choosealicense.com/licenses/mit/)