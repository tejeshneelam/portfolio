import React, { useState } from 'react'
import emailjs from 'emailjs-com'

export default function Contact() {
    const [sent, setSent] = useState(false)
    const [loading, setLoading] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)

        const formData = {
            from_name: e.target.name.value,
            from_email: e.target.email.value,
            message: e.target.message.value,
        }

        emailjs
            .send(
                "service_bq240pp",   // ✔ your service id
                "template_qgp3qeg",  // ✔ your template id
                formData,
                "DCbe_p7TIxnBvd1j0"  // ✔ your public key
            )
            .then(
                () => {
                    setLoading(false)
                    setSent(true)
                    e.target.reset()
                    setTimeout(() => setSent(false), 3000)
                },
                (err) => {
                    console.log("EmailJS Error:", err)
                    setLoading(false)
                    alert("Email failed to send. Check your EmailJS template variables.")
                }
            )
    }

    return (
        <section className="section">
            <h2>Contact</h2>

            <form className="contact-wrapper" onSubmit={handleSubmit}>

                <div className="input-group">
                    <input name="name" placeholder="Your Name" required />
                    <input name="email" type="email" placeholder="Your Email" required />
                </div>

                <textarea
                    name="message"
                    rows="6"
                    placeholder="Your Message"
                    required
                    className="contact-textarea"
                />

                <button className="btn btn-primary" type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                </button>

                {sent && (
                    <p className="sent-msg">✓ Message sent successfully!</p>
                )}

            </form>

            <div className="contact-info">
                <p>Email: <a href="mailto:nnntejesh@gmail.com">nnntejesh@gmail.com</a></p>
                <p>Location: Hyderabad, India</p>
            </div>
        </section>
    )
}
