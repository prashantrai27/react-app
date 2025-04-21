
import UserDetailClass from "./UserDetailClass";

const Contact = () => {
  let contactInfo = {
    name: 'test user',
    company: 'prashants kitchen',
    mobileNumber: '+91 12345 54321'
  }
  return (
    <div className="contact-details">
      <h3>Contact Details:</h3>
      <UserDetailClass details={contactInfo}/>
    </div>
  )
}

export default Contact;
