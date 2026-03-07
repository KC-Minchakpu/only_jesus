import Image from "next/image";
import styles from "./AboutStory.module.css";

export default function AboutStory() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* LEFT CONTENT */}
        <div className={styles.content}>
          <span className={styles.tag}>The Beginning</span>

         <h2 className={styles.title}>
            &quot;I Don&apos;t Need to Be Remembered.&quot; <br /> 
            <span>Jesus is the Only Name </span> to Remember!&quot;
          </h2> 

       <p className={styles.text}>
            During His earthly ministry, the Savior declared, <strong>“And I, if I be lifted up from the earth, 
            will draw all men unto me” </strong> (John 12:32). In these words, Jesus taught that His crucifixion, 
            being “lifted up” upon the cross—followed by His resurrection and ascension, would draw 
            people from every nation to Himself, offering salvation, hope, and reconciliation with God.
          </p>

          <p className={styles.text}>
            As Christians and followers of Christ, we are therefore called to live in a manner that 
            continually exalts His name. Our words, actions, and daily choices should reflect Christ 
            so clearly that He, not ourselves, is seen and glorified. Lifting the name of Jesus Christ 
            in all that we do is central to our calling as disciples.
          </p>

          <p className={styles.text}>
            The <strong>Only Jesus</strong> blog was inspired by the GRAMMY Award–winning, multi-platinum Christian band 
            Casting Crowns, whose music I have followed since 2003. In 2018, the band released both 
            a single and an album titled Only Jesus. Reflecting on the project, lead vocalist 
            Mark Hall shared a powerful message about legacy:
          </p>
        <div>
        <blockquote className={styles.blockquote}>
          <p>
            “There’s much talk these days about legacy… How do we want to be remembered?
            The more I think about it, the more I’m reminded that anything in me that’s worth
            remembering are the things that Jesus has worked on—and is still working on—in me.
            On my own I have nothing to offer the world, but Jesus does. So don’t mind me.
            Jesus is the only name to remember.”
          </p>

          <footer className={styles.quoteAuthor}>
             — Mark Hall, Casting Crowns
          </footer>
          </blockquote>

          <p className={styles.text}>
            Those words deeply challenged me. They led me to reflect on a simple yet searching question: 
            What am I doing with the life Jesus Christ came to give me? Am I living in such a way 
            that others see Christ in my actions, my character, and my conduct? From that moment, I made 
            a personal commitment—to live so that my children, family members, neighbors, colleagues, 
            fellow church members, and all who encounter me would see <strong>“nobody but Jesus.”</strong> My desire is 
            that when my life is remembered, it will be said that I was a man who sought to lift the 
            name of Jesus Christ in all that he did.
          </p>

          <p className={styles.text}>
            <strong>Only Jesus</strong> was therefore born as a blog with a clear purpose: to challenge Christians to 
            live lives that point others to Christ alone. Its message is simple and unwavering—to 
            exalt Jesus, reflect His love, and make His name known. <strong>Only Jesus.</strong>
          </p>
        </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.imageWrapper}>
          <Image
            src="/images/only_jesus.jpg"
            alt="Only Jesus CD Cover"
            fill
            className={styles.image}
          />

          {/* FLOATING CARD */}
          <div className={styles.floatingCard}>
            <div>
              <h4>Founded 2018</h4>
              <span>Abuja, Nigeria</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    

  );
}