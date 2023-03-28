const pdf = require("html-pdf");
const path = require("path");
const nodemailer = require("nodemailer");
const fs = require("fs");
const pdfTemplate = require("../documents/document");
const env = require("dotenv");
const ejs = require("ejs");
env.config();

const pdfCtrl = {
  createPdf: (req, res) => {
    const filePathName = path.resolve(__dirname, "../views/pdf-template.ejs");
    const htmlString = fs.readFileSync(filePathName).toString();
    // let options = {
    //   format: "Letter",
    // };
    const ejsData = ejs.render(htmlString, req.body);
    pdf.create(ejsData).toFile(`portfolio2.pdf`, (err) => {
      if (err) {
        console.log(err);
      }
      console.log(req.body);
      res.send("pdf generated");
    });
  },
  sendPdf: (req, res) => {
    pathToAttachment = path.join(__dirname, "../portfolio2.pdf");
    attachment = fs.readFileSync(pathToAttachment).toString("base64");

    let smtpTransport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      service: "Gmail",
      port: 465,
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD,
      },
      tls: { rejectUnauthorized: false },
    });

    smtpTransport.sendMail(
      {
        from: process.env.EMAIL,
        to: req.body.email,
        subject: "Risch Investment Portfolio",
        html: `
        Greetings,

        This email provide you with the PDF report of the investment risk profile as an attachment. As per your preferences,

        Thank you for taking the time to complete the questionnaire, which has provided us with valuable information to better understand your investment goals and risk tolerance.
        
        In the attached PDF file, you will find detailed information on the risk assessment process and the steps we can take to mitigate them. The report also includes recommendations to help minimize the likelihood of these risks occurring and reduce the impact if they do occur.
        
        We hope that this report will provide you with valuable insights and help you make an informed decision regarding the investment opportunity. If you have any questions or require further clarification on any of the information provided in the report, please do not hesitate to contact us.
        
        Thank you for choosing our services.
        
        Sincerely,
        
        ${process.env.EMAIL}`,
        attachments: [
          {
            content: attachment,
            filename: "portfolio.pdf",
            contentType: "application/pdf",
            path: pathToAttachment,
          },
        ],
      },
      function (error, info) {
        if (error) {
          console.log(error);
        } else {
          res.send("Mail has been sended to your email. Check your mail");
        }
      }
    );
  },
};

module.exports = pdfCtrl;
