import React,{ useEffect } from "react"
import gsap from 'gsap'
import Heading from "./Heading"
import AgeHeading from "./AgeHeading"
import BirthdayGirl from "../assets/birthday-girl.svg"

export default function Hero() {
    useEffect(() => {
        const tl = gsap.timeline();
        tl.from('#balloon-with-string', {duration: 2, x: 100, y: 100})
          .fromTo('#balloon', {z: -15}, {duration: 2, z: 15, yoyo: true,repeat: -1})
    })
  return (
    <div className="section">
      <div className="row">
        <div className="col s7 valign-wrapper">
          <div className="headings">
            <Heading
              classes="typewriter light-green-text text-accent-3"
              text="Happy Birthday Kesh"
            />
            <AgeHeading classes="typewriter age light-green-text text-accent-3" text="Happy 26th" />
          </div>
        </div>
        <div className="col s5">
          <div className="present-svg">
            <BirthdayGirl />
          </div>
        </div>
      </div>
    </div>
  )
}
