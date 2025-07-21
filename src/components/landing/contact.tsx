import { FiMail, FiPhone } from 'react-icons/fi'
import { ContactForm } from '../forms/contact-form'

const Contact = () => {
  return (
    <section id="contact" className="mb-20 lg:mb-28">
      <div className="text-center mb-16 lg:mb-20">
        <h4 className="mb-2">Connect with me</h4>
        <h2 className="heading">
          Get in <span className="text-purple">touch</span>
        </h2>
        <p className="text-center mt-6">
          Have a good day! If you have any questions, comments, or feedback, please use the form below.
        </p>
        <ul className="flex flex-col text-gray-400 gap-1 mt-4 items-center justify-center">
          <li className="flex items-center gap-2">
            <FiMail fontSize={18} />
            <span className="text-sm lg:text-base">nam71441@gmail.com</span>
          </li>
          <li className="flex items-center gap-2">
            <FiPhone fontSize={18} />
            <span className="text-sm lg:text-base">0393150468</span>
          </li>
        </ul>
      </div>
      <div className="place-items-center mt-14">
        <div className="max-w-4xl w-full">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default Contact
