import Hero from "@/components/Hero/Hero";
import AwardCard from "@/components/AwardCard/AwardCard";
import styles from "./achievements.module.css";

export default function Achievements() {
  return (
    <>
      <Hero
        title="Our Achievements"
        subtitle="Honored nationally for humanitarian and entrepreneurial excellence."
        bgImage="/images/achievements-hero.jpg"
      />

      <section className="container">
        <h2 className={styles.heading}>National Awards</h2>

        <div className={styles.grid}>
          <AwardCard title="Mahatma Gandhi National Pride Award" emoji="🏅" image="/images/award-mahatma-gandhi-pride.jpg" />
          <AwardCard title="Dr. APJ Abdul Kalam Bhartiya Ratan Samaan" emoji="🏆" image="/images/kalam-samman-1.jpg" />
          <AwardCard title="MSME Recognition – Govt. of India" emoji="🎖️" image="/new-img/MSME.jpeg" />
        </div>

        <blockquote className={styles.quote}>
          “Business should not be about profits — it should be about purpose.”  
          <br />
          <span>– Mr. Antony John Britto</span>
        </blockquote>
      </section>
    </>
  );
}
