import React from 'react';
import styles from './FounderArticle.module.css';

const FounderArticle: React.FC = () => {
  return (
    <div className={styles.founderArticle}>
      <div className={styles.founderImageWrapper}>
        <img 
          src="/images/founder-smile-event2.jpg" 
          alt="Mr. Antony John Britto - Founder of Britto Associates"
          className={styles.founderImage}
        />
      </div>
      <div className={styles.founderText}>
        <p><strong>Mr. Antony John Britto: The Visionary Behind Britto Associates</strong></p>
        <p>Britto Associates, a multifaceted enterprise based in Bangalore, India, stands as a testament to the vision of its founder and leader, Mr. Antony John Britto. An inspiring entrepreneur, legal consultant, and dedicated humanitarian, Mr. Britto has successfully built an organization recognized for integrating business excellence with profound social responsibility.</p>
        
        <h5>A Unified Vision for Business and Society</h5>
        <p>Mr. Britto&apos;s core philosophy centers on the belief that successful business operations must actively contribute to the upliftment of society. Under his guidance, Britto Associates operates with the dual mission of delivering professional excellence across various verticals while championing social causes through education, employment, and community awareness.</p>
        <p>The firm&apos;s credibility and commitment to quality are cemented by its ISO 9001–2005 Certification and its MSME Registration approved by the Government of India, acknowledging its contribution to the nation&apos;s small business ecosystem.</p>
        
        <h5>Key Pillars of Britto Associates</h5>
        <p>Under Mr. Britto&apos;s leadership, the company thrives across several distinct yet interconnected domains:</p>
        
        <h6>1. Education Consultancy</h6>
        <p>Recognizing the critical challenges students face in navigating complex career landscapes, Mr. Britto established the Education Consultancy vertical. This segment focuses on providing personalized mentorship and guidance, helping countless young individuals make informed academic decisions and realize their career aspirations. The frequent Education & Career Expo events, which offer free counseling, are a key part of this commitment.</p>
        
        <h6>2. Legal and Property Services</h6>
        <p>Mr. Britto&apos;s deep understanding of legal and property laws forms the foundation of this vertical. Britto Associates offers trusted and transparent services in real estate, helping clients with everything from secure property deals to comprehensive documentation. Furthermore, the firm extends its expertise to crucial Legal Consultancy Services, focusing on Property Law, Human Rights, and Animal Rights, ensuring that justice and ethical practices are upheld across these sensitive domains.</p>
        
        <h5>Commitment to Humanitarian Causes</h5>
        <p>Beyond his professional pursuits, Mr. Antony John Britto is known for his deep involvement in social work and activism. He dedicates significant time and effort to promoting human rights awareness and animal welfare. His initiatives often involve supporting underprivileged children&apos;s access to education, advocating for environmental conservation, and facilitating the rescue and care of animals in distress. This activism reflects his belief that a responsible business must act as a responsible citizen.</p>
        
        <h5>National Recognition</h5>
        <p>For his exceptional service and ethical leadership, Mr. Britto has received several distinguished honors, including:</p>
        <ul>
          <li>The Mahatma Gandhi National Pride Award</li>
          <li>The Dr. APJ Abdul Kalam Bhartiya Ratan Samaan</li>
          <li>Vijay Gaurav samaan award (certificate of achievement)</li>
        </ul>
        
        <p>Mr. Britto&apos;s overarching vision is to create a singular, ethical platform where business success is seamlessly integrated with community growth, ensuring service, justice, and societal progress remain at the forefront of every endeavor.</p>
      </div>
    </div>
  );
};

export default FounderArticle;