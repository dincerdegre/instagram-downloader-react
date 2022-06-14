import React from 'react'
import classes from './FAQ.module.css'
const FAQ = () => {
  return (
    <div className='faq'>
        <div className='container'>
        <h2>FAQ - Frequently Asked Questions</h2>
        <div className={classes.faqItem}>
        <h3>What is Instagram video Downloader?</h3>
        <p>
        An internet based instrument permits you to download Instagram photographs, recordings, and IGTV recordings. On the off chance that you want to utilize it later.the fastest tool for downloading from Instagram.
        </p>
        </div>
        <div className={classes.faqItem}>
        <h3>Do I Need to Sign in with my Instagram Account?</h3>
        <p>
        No, you don't need to log in to your account, this tool doesnt ask for any information from you.
        </p>
        </div>
        <div className={classes.faqItem}>
        <h3>Do I have to pay for Use this Tool Service?</h3>
        <p>
        This tool is free.
        </p>
        </div>
        <div className={classes.faqItem}>
        <h3>Can I download Instagram Stories?</h3>
        <p>
        Yes, you can download Instagram Stories. Click tree dots on the top right corner of the screen, then select copy link and paste to this tool and Download it.
        </p>
        </div>
        <div className={classes.faqItem}>
        <h3>Can I download Instagram Medias for computers?</h3>
        <p>
        Yes, you can download All from PC
        </p>
        </div>
        <div className={classes.faqItem}>
        <h3>Where is the Video that i Download?</h3>
        <p>
        Videos are usually saved in the "Downloads" folder on PC and Android also Gallery on iPhone, iPad
        </p>
        </div>
        </div>
    </div>
  )
}



export default FAQ