import React from "react";

const ContactMap: React.FC = () => {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg mt-12">
      <iframe
        title="Localisation 111 Studio"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.987654321!2d9.708!3d4.050!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061d123456789ab%3A0xabcdef123456789!2sDouala%2C%20Cameroun!5e0!3m2!1sfr!2s!4v1699999999999!5m2!1sfr!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactMap;
