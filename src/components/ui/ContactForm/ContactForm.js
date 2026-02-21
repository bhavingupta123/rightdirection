import { useState } from 'react';
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import Input from '../Input/Input';
import Button from '../Button/Button';
import services from '../../../assets/data/services';
import styles from './ContactForm.module.css';

const budgetOptions = [
  { value: 'under-25k', label: 'Under ₹25,000/month' },
  { value: '25k-50k', label: '₹25,000 - ₹50,000/month' },
  { value: '50k-1l', label: '₹50,000 - ₹1,00,000/month' },
  { value: '1l-3l', label: '₹1,00,000 - ₹3,00,000/month' },
  { value: '3l-plus', label: '₹3,00,000+/month' },
];

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', service: '', budget: '', message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Please enter a valid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s/g, '')))
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
    } else {
      setErrors(newErrors);
    }
  };

  if (submitted) {
    return (
      <div className={styles.success}>
        <FaCheckCircle className={styles.successIcon} />
        <h3>Thank You!</h3>
        <p>Your message has been sent successfully. Our team will get back to you within 24 hours.</p>
        <Button variant="primary" onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' }); }}>
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <Input label="Full Name" name="name" value={formData.name} onChange={handleChange} error={errors.name} required placeholder="John Doe" />
        <Input label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} required placeholder="john@company.com" />
      </div>
      <div className={styles.row}>
        <Input label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} error={errors.phone} required placeholder="98765 43210" />
        <Input label="Company Name" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company" />
      </div>
      <div className={styles.row}>
        <Input label="Service Interested In" name="service" as="select" value={formData.service} onChange={handleChange} error={errors.service} required placeholder="Select a service" options={services.map(s => ({ value: s.slug, label: s.name }))} />
        <Input label="Monthly Budget" name="budget" as="select" value={formData.budget} onChange={handleChange} placeholder="Select budget range" options={budgetOptions} />
      </div>
      <Input label="Your Message" name="message" as="textarea" value={formData.message} onChange={handleChange} error={errors.message} required placeholder="Tell us about your project and goals..." />
      <Button type="submit" variant="primary" size="lg" icon={FaPaperPlane}>
        Send Message
      </Button>
    </form>
  );
}

export default ContactForm;
