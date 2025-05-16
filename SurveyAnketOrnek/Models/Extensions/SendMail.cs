using System.Net.Mail;
using System.Net;

namespace SurveyAnketOrnek.Models.Extensions
{
    public class SendMail
    {
        //private async Task SendEmailAsync(string toEmail, string subject, string body)
        //{
        //    var mail = new MailMessage
        //    {
        //        From = new MailAddress(_smtpSettings.SenderEmail, _smtpSettings.SenderName),
        //        Subject = subject,
        //        Body = body,
        //        IsBodyHtml = true
        //    };

        //    mail.To.Add(toEmail);

        //    using var smtp = new SmtpClient(_smtpSettings.Host, _smtpSettings.Port)
        //    {
        //        Credentials = new NetworkCredential(_smtpSettings.UserName, _smtpSettings.Password),
        //        EnableSsl = _smtpSettings.EnableSsl
        //    };

        //    await smtp.SendMailAsync(mail);
        //}

    }
}
