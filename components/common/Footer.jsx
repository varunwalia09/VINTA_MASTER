'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import msgIcon from '@/public/assets/imgs/message-icon.svg'

function Footer() {
  const router = useRouter();
  const handleScroll = (id) => {
      router.push(`/#${id}`)
  };

  return (
    <footer className="clean-footer crev">
    
      <div className="container pb-40 pt-40 ontop">
        <div className="row justify-content-between">
          <div className="col-lg-2">
            <a href='/' className="logo icon-img-150 md-mb80">
              <img src="/assets/imgs/logo-light.svg" alt="website-logo" />
              <span className='chat-icon'>

              <Image src={msgIcon} alt="msg-icon"/>
              </span>
            </a>
          </div>
          <div className="col-lg-4">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Contact</h6>
              <h6 className="p-color fw-400">
              416  Phase 5 Mohali,
             <br />  Chandigarh.
              </h6>
              <h6 className="mt-30 mb-15">
                <a href="mailto:Contact@vintaverse@gmail.com">Contact@vintaverse@gmail.com</a>
              </h6>
              <a href="tel:+917807338558" className="underline">
                <span className="fz-22 main-color">+917807338558</span>
              </a>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Useful Links</h6>
              <ul className="rest fz-14 opacity-7">
                <li className="mb-15">
                  <a  role="button"
  onClick={() => handleScroll("mainHomeAboutUs")}>About</a>
                </li>
                <li className="mb-15">
                  <a  role="button"
  onClick={() => handleScroll("mainHomeServices")}>Services</a>
                </li>
                <li>
                  <a href="/page-contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="column subscribe-minimal">
              <h6 className="sub-title mb-30">Newsletter</h6>
              <div className="form-group mb-40">
                <input type="text" name="subscrib" placeholder="Your Email" />
                <button>
                  <span className="ti-location-arrow"></span>
                </button>
              </div>
              <ul className="rest social-icon d-flex align-items-center">
                <li className="hover-this cursor-pointer">
                  <a href="#0" className="hover-anim">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a href="#0" className="hover-anim">
                    <i className="fab fa-dribbble"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a href="#0" className="hover-anim">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a href="#0" className="hover-anim">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-30 pb-30 mt-80 bord-thin-top">
          <div className="text-center">
            <p className="fz-14">
            Copyright © 2024  <span className="mx-1 underline">
              
                <a href="#" target="_blank" className='  main-color'>
                Vintaverse
                </a>.
              </span> All rights reserved.
             
            </p>
          </div>
        </div>
      </div>
      <div className="circle-blur">
        <img src="/assets/imgs/patterns/blur1.png" alt="" />
      </div>
    </footer>
  );
}

export default Footer;
