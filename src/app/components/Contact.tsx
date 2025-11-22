'use client';
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { toast } from "sonner"; 

export default function Contact() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    if (formData.name.length < 2) {
      toast.error(t('contact.validation.nameMin'));
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error(t('contact.validation.emailInvalid'));
      return false;
    }
    if (formData.subject.length < 3) {
      toast.error(t('contact.validation.subjectMin'));
      return false;
    }
    if (formData.message.length < 10) {
      toast.error(t('contact.validation.messageMin'));
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    const body = new FormData();
    body.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "");
    body.append("name", formData.name);
    body.append("email", formData.email);
    body.append("message", formData.message);
    body.append("from_name", formData.name);
    body.append("reply_to", formData.email);
    body.append("subject", `${formData.subject} - Portfolio`);
    body.append("botcheck", ""); // Honeypot

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body
      });

      const result = await response.json();

      if (result.success) {
        toast.success(t('contact.success'), {
          icon: <CheckCircle className="text-green-500" />,
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error(t('contact.error'));
      }
    } catch (error) {
      console.error("Erreur:", error);
      toast.error(t('contact.errorTry'));
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 bg-gray-900 animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16 animate-fade-down">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {t('contact.title')}
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">

            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white mb-4">{t('contact.info.title')}</h3>
              <p className="text-gray-400 mb-8">{t('contact.info.description')}</p>

              {[{ icon: MapPin, title: t('contact.info.location'), color: 'from-blue-500 to-cyan-500' },
                { icon: Phone, title: t('contact.info.phone'), color: 'from-green-500 to-emerald-500' },
                { icon: Mail, title: t('contact.info.email'), color: 'from-purple-500 to-pink-500' }]
              .map(({ icon: Icon, title, color }, i) => (
                <div key={i} className="flex items-center space-x-4 group animate-fade-right">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${color} group-hover:scale-110 transition`}> <Icon className="w-6 h-6 text-white" /> </div>
                  <span className="text-gray-300 font-medium">{title}</span>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900 border border-gray-700 p-8 rounded-2xl shadow-lg animate-fade-left">
              <form onSubmit={handleSubmit} noValidate className="space-y-6">

                <div>
                  <label className="block text-sm text-gray-300 mb-1">{t('contact.name')}</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-white" 
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-1">{t('contact.email')}</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-white" 
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-1">{t('contact.subject')}</label>
                  <input 
                    type="text" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-white" 
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-300 mb-1">{t('contact.message')}</label>
                  <textarea 
                    name="message" 
                    rows={6} 
                    value={formData.message} 
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 text-white resize-none" 
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                  <span>{loading ? t('contact.sending') : t('contact.send')}</span>
                </button>

              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}