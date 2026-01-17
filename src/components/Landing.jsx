function Home() {
    return (
        <main className="border-t-6 border-yellow-400 md:w-full">
            {/* Hero section */}
            <section className="relative min-h-[70vh] md:min-h-screen w-full bg-cover bg-top" style={{ backgroundImage: "url('/assets/9a280e_e181bb00408745a6adda7f5fb10583cb~mv2.avif')" }}>
                <div className="absolute inset-0 flex flex-col justify-center">
                    <div className="-mb-6">
                        <img src="/assets/logo.png" alt="Logo" className="w-32 md:w-48 mx-auto mb-6"/>
                    </div>
                    <div className="relative z-10 flex flex-col items-center justify-center py-8 text-center px-4 bg-black/40">
                        <h1 className="text-3xl md:text-5xl font-extrabold text-lime-300">
                            Best Plywood <br />
                            Factory to Doorstep
                        </h1>
                        <p className="mt-4 text-sm md:text-xl text-gray-200">Transform Spaces with Lenador Impex</p>
                        <div className="mt-8 flex flex-col sm:flex-col gap-4">
                            <a href="tel:+919999999999" className="bg-white text-black w-40 py-2 rounded-full text-lg hover:bg-black hover:text-white transition">Call🤙</a>
                            <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="bg-lime-400 text-black w-40 py-2 rounded-full text-lg hover:bg-black hover:text-white transition">WhatsApp</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2nd section */}
            <section className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {/* TELL US */}
                    <div className="bg-emerald-400 text-black flex flex-col items-center justify-center px-24 py-20">
                        <h1 className="text-5xl font-bold" style={{ letterSpacing: "0.30em" }}>TELL</h1>
                        <h1 className="text-5xl font-bold text-white mb-4" style={{ letterSpacing: "0.30em" }}>US</h1>
                        <div className="w-10 h-2 bg-white mb-7 mt-2"></div>

                        <form className="w-full max-w-sm grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div className="space-y-1">
                                <input type="text" placeholder="Name" className="w-full bg-transparent border border-black px-3 py-2 outline-none"/>
                                <input type="email" placeholder="Email" className="w-full bg-transparent border border-black px-3 py-2 outline-none"/>
                                <input type="text" placeholder="Subject" className="w-full bg-transparent border border-black px-3 py-2 outline-none"/>    
                            </div>
                            <textarea className="w-full bg-transparent border border-black px-3 py-2 outline-none md:col-span-1 col-span-1" rows="4"/>
                            <div className="col-span-2 flex justify-end mt-2">
                                <button className="bg-black text-white w-20 py-1">Submit</button>
                            </div>
                        </form>
                    </div>

                    {/* CONTACT US */}
                    <div className="bg-black text-white flex flex-col items-center justify-center px-10 py-20 text-center">
                        <h1 className="text-5xl font-bold text-emerald-400 font-calibri" style={{ letterSpacing: "0.30em" }}>CONTACT</h1>
                        <h1 className="text-5xl font-bold mb-4 -mt-1" style={{ letterSpacing: "0.30em" }}>US</h1>
                        <div className="w-8 h-2 bg-white mb-7 mt-2"></div>
                        <p className="text-lg font-semibold">+91-72982-44444</p>
                        <p className="text-lg font-semibold mt-2">+91-9026088085</p>
                    </div>

                    {/* VISIT US */}
                    <div className="bg-neutral-700 text-white flex flex-col items-center justify-center px-10 py-20 text-center">
                        <h1 className="text-5xl font-bold text-emerald-400" style={{ letterSpacing: "0.30em" }}>VISIT</h1>
                        <h1 className="text-5xl font-bold mb-4 mt-1" style={{ letterSpacing: "0.30em" }}>US</h1>
                        <div className="w-10 h-2 bg-white mb-7 mt-2"></div>
                        <p className="mb-4">
                            Monday - Saturday 10:30 - 18:30 <br />
                            Sundays Closed
                        </p>
                        <p className="font-semibold mt-6">LAST GODOWN</p>
                        <p className="mt-2">
                            8/1 MILL ROAD AISHBAGH <br />
                            LUCKNOW
                        </p>
                    </div>
                </div>
            </section>

            {/* Youtube section */}
            <section className="bg-yellow-400 py-20">
                <div className="max-w-2xl mx-auto px-4">
                    <div className="relative w-full aspect-video shadow-xl">
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src="https://www.youtube.com/embed/watch?v=Uabj-BP2XqM&list=TLGG-4eZ16QnfesxNzAxMjAyNg&t=2s"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* Our Products section */}
            <section className="bg-cover bg-center bg-no-repeat max-w-full" style={{backgroundImage:"url('https://static.wixstatic.com/media/9a280e_ab93a3b99b274c68960c7ab7988f005d~mv2.jpg/v1/fill/w_1225,h_1123,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9a280e_ab93a3b99b274c68960c7ab7988f005d~mv2.jpg')",}}>
                <div className="p-10 inset-0 bg-[#E9E2C1]/85">
                    <h1 className="text-7xl font-bold font-serif">Our Products</h1>
                    <hr className="mt-15 mb-10" />
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        <div>
                            <div className="relative inline-block overflow-hidden group">
                                <img src="/assets/Flim faced.png" alt="" className="w-full transition-transform duration-500 ease-out md:group-hover:scale-110" />
                                <span className="absolute top-0 left-0 bg-yellow-400 text-white text-lg px-3 py-1">Hostelling</span>
                            </div>
                            <p className="font-thin mt-2 text-lg">Film Faced Shuttering Plywood<br /><strong>₹</strong>45.00</p>
                        </div>
                        <div>
                            <div className="relative inline-block overflow-hidden group">
                                <img src="/assets/Caliberated-710.png" alt="" className="w-full transition-transform duration-500 ease-out md:group-hover:scale-110" />
                                <span className="absolute top-0 left-0 bg-yellow-400 text-white text-lg px-3 py-1">Hostelling</span>
                            </div>
                            <p className="font-thin mt-2 text-lg">Caliberated 710 Plywood BWP (Marine)<br /><strong>₹</strong>80.00</p>
                        </div>
                        <div>
                            <div className="relative inline-block overflow-hidden group">
                                <img src="/assets/Caliberated-303.png" alt="" className="w-full transition-transform duration-500 ease-out md:group-hover:scale-110" />
                                <span className="absolute top-0 left-0 bg-yellow-400 text-white text-lg px-3 py-1">Hostelling</span>
                            </div>
                            <p className="font-thin mt-2 text-lg">Caliberated 303 Plywood BWR<br /><strong>₹</strong>80.00</p>
                        </div>
                        <div>
                            <div className="relative inline-block overflow-hidden group">
                                <img src="/assets/710-plywood.png" alt="" className="w-full transition-transform duration-500 ease-out md:group-hover:scale-110" />
                                <span className="absolute top-0 left-0 bg-yellow-400 text-white text-lg px-3 py-1">Hostelling</span>
                            </div>
                            <p className="font-thin mt-2 text-lg">710 Plywood BWP (Marine)<br /><strong>₹</strong>80.00</p>
                        </div>
                        <div>
                            <div className="relative inline-block overflow-hidden group">
                                <img src="/assets/Commercial_Plywood.png" alt="" className="w-full transition-transform duration-500 ease-out md:group-hover:scale-110" />
                                <span className="absolute top-0 left-0 bg-yellow-400 text-white text-lg px-3 py-1">Hostelling</span>
                            </div>
                            <p className="font-thin mt-2 text-lg">Commercial Plywood<br /><strong>₹</strong>20.00</p>
                        </div>
                        <div>
                            <div className="relative inline-block overflow-hidden group">
                                <img src="/assets/303-plywood.png" alt="" className="w-full transition-transform duration-500 ease-out md:group-hover:scale-110" />
                                <span className="absolute top-0 left-0 bg-yellow-400 text-white text-lg px-3 py-1">Hostelling</span>
                            </div>
                            <p className="font-thin mt-2 text-lg">303 Plywood BWR<br /><strong>₹</strong>80.00</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="bg-cover bg-center bg-full bg-no-repeat max-w-full" style={{backgroundImage:"url('https://static.wixstatic.com/media/9a280e_c88f36e86f7949bc84320771f9ab4a5f~mv2.jpg/v1/fill/w_1225,h_1038,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9a280e_c88f36e86f7949bc84320771f9ab4a5f~mv2.jpg')",}}>
                <div className="p-10 inset-0 bg-white/80">
                    <h1 className="mt-10 text-4xl md:text-7xl font-bold font-serif px-5 bg-white/40 mb-10">Story</h1>
                    <p className="mt-6 font-thin text-lg text-center md:text-center md:ml-50">Crafting Excellence Always</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-10">
                        <img src="/assets/Story_image.png" alt="" className="w-full max-w-md mx-auto"/>
                        <div className="mt-6 md:mt-0 md:mr-30">
                            <p className="text-2xl font-serif leading-relaxed text-gray-900 md:-ml-10">Lenador Impex is an exciting powerhouse in the Indian plywood manufacturing scene, devoted to delivering top-notch plywood solutions! Our unwavering commitment to excellence and innovation makes us stand out in the industry. With a keen eye on quality durability, and design, we're here to elevate your spaces with our exceptional plywood products!</p>
                            <button className="mt-10 px-10 py-3 bg-black text-white rounded-full">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Range Section */}
            <section className="bg-cover bg-top bg-no-repeat" style={{backgroundImage:"url('https://static.wixstatic.com/media/9a280e_84e392353ff9444f931f9aca6e807d8e~mv2.jpg/v1/fill/w_1225,h_2926,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/9a280e_84e392353ff9444f931f9aca6e807d8e~mv2.jpg')",}}>
                <div className="p-10 inset-0">
                    <h1 className="mt-9 text-7xl font-bold font-serif px-5 mb-20">Product Range</h1>
                    <p className="text-white font-serif text-2xl pl-5 inline-block mr-100">Our diverse product range includes Shuttering Plywood, Block Board, Flush Door, and Plywood of various grades. Each product is crafted with precision and expertise to meet a wide range of construction and design needs.</p>
                </div>
                <div className="grid grid-cols-2 p-8 -mt-16">
                    <img src="/assets/shuttering_product.png" alt="" className="border-r h-full" />
                    <div className="p-10 bg-yellow-400">
                        <h2 className="text-3xl md:text-6xl font-serif font-bold md:p-8">Shuttering Plywood</h2>
                        <p className="mt-4 text-lg md:text-2xl md:p-8 font-serif">Get ready to experience our Shuttering Plywood, expertly engineered to exceed the toughest standards! You can count on its reliable performance to shine on-site every time!</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 p-8 -mt-16">
                    <div className="p-10 bg-yellow-400">
                        <h2 className="text-3xl md:text-6xl font-serif font-bold">Block Board</h2>
                        <p className="mt-6 text-lg md:text-2xl font-serif">Our Block Board is crafted with precision, ensuring long-lasting performance and structural integrity.</p>
                    </div>
                    <img src="/assets/block_board.png" alt="" className="border-l w-full h-full" />
                </div>
                <div className="grid grid-cols-2 p-8 -mt-16">
                    <img src="/assets/flush_door.png" alt="" className="border-r h-full mb:h-full" />
                    <div className="p-10 bg-yellow-400">
                        <h2 className="text-3xl md:text-6xl font-serif font-bold">Flush Door</h2>
                        <p className="mt-6 text-lg md:text-2xl font-serif">Flush Doors are designed for modern aesthetics and functionality, adding style to any space. <br /><br />Our Flush Doors combine elegance with durability, perfect for residential and commercial use.</p>
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <button className="bg-black text-white py-3 px-7 rounded-full mb-8 border border-purple-800 hover:bg-transparent hover:text-purple-800">Look at Process</button>
                </div>
            </section>

            {/* Become a dealer Section */}
            <h1 className="text-4xl font-bold font-serif text-center py-5 bg-black text-white">BECOME A DEALER</h1>
            <section className="bg-cover bg-center bg-full bg-no-repeat max-w-full" style={{backgroundImage:"url('https://static.wixstatic.com/media/9a280e_700d9a91ea664fa8b328d41e0ebf2c92~mv2.jpg/v1/fill/w_1225,h_1314,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9a280e_700d9a91ea664fa8b328d41e0ebf2c92~mv2.jpg')",}}>
                <div className="flex justify-center pt-24 pb-24">
                    <form className="space-y-4 bg-white w-full max-w-md p-8 shadow-xl">
                        <div>
                            <label className="block text-sm mb-1">First name</label>
                            <input type="text" className="w-full border border-gray-400 px-3 py-2 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Last name</label>
                            <input type="text" className="w-full border border-gray-400 px-3 py-2 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Phone</label>
                            <input type="tel" className="w-full border border-gray-400 px-3 py-2 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Country / Region</label>
                            <select className="w-full border border-gray-400 px-3 py-2 outline-none">
                                <option disabled>Select country</option>
                                <option value="">Afganistan</option>
                                <option value="">Aland Islands</option>
                                <option value="">Albania</option>
                                <option value="">Algeria</option>
                                <option value="">American Samoa</option>
                                <option value="">Andorra</option>
                                <option value="">Angola</option>
                                <option value="">Anguilla</option>
                                <option value="">Antarctica</option>
                                <option value="">Antigua and Barbuda</option>
                                <option value="">Argentina</option>
                                <option value="">Armenia</option>
                                <option value="">Aruba</option>
                                <option value="">Australia</option>
                                <option value="">Austria</option>
                                <option value="">Azerbaijan</option>
                                <option value="">Bahamas</option>
                                <option value="">Bahrain</option>
                                <option value="">Bangladesh</option>
                                <option value="">Barbados</option>
                                <option value="">Belarus</option>
                                <option value="">Belgium</option>
                                <option value="">Belize</option>
                                <option value="">Benin</option>
                                <option value="">Bermuda</option>
                                <option value="">Bhutan</option>
                                <option value="">Bolivia</option>
                                <option value="">Bonaire</option>
                                <option value="">Bosnia and Herzegovina</option>
                                <option value="">Botswana</option>
                                <option value="">Bouvet Island</option>
                                <option value="">Brazil</option>
                                <option value="">British Indian Ocean Territory</option>
                                <option value="">British Virgin Islands</option>
                                <option value="">Brunei</option>
                                <option value="">Bulgaria</option>
                                <option value="">Burkina Faso</option>
                                <option value="">Burundi</option>
                                <option value="">Combodia</option>
                                <option value="">Cameroon</option>
                                <option value="">Canada</option>
                                <option value="">Cape Verde</option>
                                <option value="">Cayman Islands</option>
                                <option value="">Central American Republic</option>
                                <option value="">Chad</option>
                                <option value="">Chile</option>
                                <option value="">China</option>
                                <option value="">Christmas Island</option>
                                <option value="">Cocos (Keeling) Islands</option>
                                <option value="">Colombia</option>
                                <option value="">Comoros</option>
                                <option value="">Congo (Brazzaville)</option>
                                <option value="">Congo (Kinshasa)</option>
                                <option value="">Cook Islands</option>
                                <option value="">Costa Rica</option>
                                <option value="">Croatia</option>
                                <option value="">Curacao</option>
                                <option value="">Cyprus</option>
                                <option value="">Czech Republic</option>
                                <option value="">Denmark</option>
                                <option value="">Djibouti</option>
                                <option value="">Dominica</option>
                                <option value="">Dominican Republic</option>
                                <option value="">East Timor</option>
                                <option value="">Ecuador</option>
                                <option value="">Egypt</option>
                                <option value="">El Salvador</option>
                                <option value="">Equatorial Guinea</option>
                                <option value="">Eritea</option>
                                <option value="">Estonia</option>
                                <option value="">Ethiopia</option>
                                <option value="">Falkland Islands</option>
                                <option value="">Faroe Islands</option>
                                <option value="">Fiji</option>
                                <option value="">Finland</option>
                                <option value="">France</option>
                                <option value="">French Guiana</option>
                                <option value="">French Polynesia</option>
                                <option value="">Frech Southern Territory</option>
                                <option value="">Gabon</option>
                                <option value="">Gambia</option>
                                <option value="">Georgia</option>
                                <option value="">Germany</option>
                                <option value="">Ghana</option>
                                <option value="">Gibraltar</option>
                                <option value="">Greece</option>
                                <option value="">Greenland</option>
                                <option value="">Grenada</option>
                                <option value="">Guadeloupe</option>
                                <option value="">Guam</option>
                                <option value="">Guatemala</option>
                                <option value="">Guernsey</option>
                                <option value="">Guinea</option>
                                <option value="">Guinea-Bisssau</option>
                                <option value="">Guyana</option>
                                <option value="">Haiti</option>
                                <option value="">Heard Island and McDonald Islands</option>
                                <option value="">Honduras</option>
                                <option value="">Hong Kong</option>
                                <option value="">Hungary</option>
                                <option value="">Iceland</option>
                                <option value="">India</option>
                                <option value="">Indonesia</option>
                                <option value="">Iraq</option>
                                <option value="">Ireland</option>
                                <option value="">Isle of Man</option>
                                <option value="">Israel</option>
                                <option value="">Italy</option>
                                <option value="">Jamaica</option>
                                <option value="">Japan</option>
                                <option value="">Jersey</option>
                                <option value="">Jordon</option>
                                <option value="">Kazakhastan</option>
                                <option value="">Kenya</option>
                                <option value="">Kiribati</option>
                                <option value="">Kosovo</option>
                                <option value="">Kuwait</option>
                                <option value="">Kyrgyzstan</option>
                                <option value="">Laos</option>
                                <option value="">Latvia</option>
                                <option value="">Lebanon</option>
                                <option value="">Lesotho</option>
                                <option value="">Liberia</option>
                                <option value="">Libya</option>
                                <option value="">Liechtenstein</option>
                                <option value="">Lithuania</option>
                                <option value="">Luxembourg</option>
                                <option value="">Macau</option>
                                <option value="">Macedonia</option>
                                <option value="">Madagascar</option>
                                <option value="">malawi</option>
                                <option value="">Malaysia</option>
                                <option value="">Maldives</option>
                                <option value="">Mali</option>
                                <option value="">Malta</option>
                                <option value="">Marshall Islands</option>
                                <option value="">Martinique</option>
                                <option value="">Mauritania</option>
                                <option value="">Mauritius</option>
                                <option value="">Mayotte</option>
                                <option value="">Mexico</option>
                                <option value="">Micronesia</option>
                                <option value="">Moldova</option>
                                <option value="">Monaco</option>
                                <option value="">Mongolia</option>
                                <option value="">Montenegro</option>
                                <option value="">Montserrat</option>
                                <option value="">Morocco</option>
                                <option value="">Mozambique</option>
                                <option value="">Mayanmar</option>
                                <option value="">Namibia</option>
                                <option value="">Nauru</option>
                                <option value="">Nepal</option>
                                <option value="">Netherlands</option>
                                <option value="">Netherlands Antilles</option>
                                <option value="">New Caledonia</option>
                                <option value="">New Zealand</option>
                                <option value="">Nicaragua</option>
                                <option value="">Niger</option>
                                <option value="">Nigeria</option>
                                <option value="">Niue</option>
                                <option value="">Norfolk Island</option>
                                <option value="">Northern Mariana Island</option>
                                <option value="">Norway</option>
                                <option value="">Oman</option>
                                <option value="">Pakistan</option>
                                <option value="">Palau</option>
                                <option value="">Palastinian Territories</option>
                                <option value="">Panama</option>
                                <option value="">Papua New Guinea</option>
                                <option value="">Paraguay</option>
                                <option value="">Peru</option>
                                <option value="">Philippines</option>
                                <option value="">Pitcairn</option>
                                <option value="">Poland</option>
                                <option value="">Portugal</option>
                                <option value="">Puerto Rico</option>
                                <option value="">Qatar</option>
                                <option value="">Republic of Cote d'loire</option>
                                <option value="">Reunion</option>
                                <option value="">Romania</option>
                                <option value="">Russia</option>
                                <option value="">Rwanda</option>
                                <option value="">Saint Barthelemy</option>
                                <option value="">Saint Helena</option>
                                <option value="">Saint Kitts and Nevis</option>
                                <option value="">Saint Lucia</option>
                                <option value="">Saint Martin</option>
                                <option value="">Saint Pierre and Miquelon</option>
                                <option value="">Saint Vincent and the Grenadines</option>
                                <option value="">Samoa</option>
                                <option value="">San Marino</option>
                                <option value="">Sau Tome and Principe</option>
                                <option value="">Saudi Arabia</option>
                                <option value="">Senegal</option>
                                <option value="">Sarbia</option>
                                <option value="">Seychelles</option>
                                <option value="">Sierra Leone</option>
                                <option value="">Singapore</option>
                                <option value="">Sint Maarten</option>
                                <option value="">Slovakia</option>
                                <option value="">Slovenia</option>
                                <option value="">Solomon Islands</option>
                                <option value="">Somalia</option>
                                <option value="">South Africa</option>
                                <option value="">South Georgia and the South Sandwitch Islands</option>
                                <option value="">South Korea</option>
                                <option value="">South Sudan</option>
                                <option value="">Spain</option>
                                <option value="">Sri Lanka</option>
                                <option value="">Sudan</option>
                                <option value="">Suriname</option>
                                <option value="">Svalbard and Jan Mayen</option>
                                <option value="">Swaziland</option>
                                <option value="">Sweden</option>
                                <option value="">Switzerland</option>
                                <option value="">Taiwan</option>
                                <option value="">Tajikistan</option>
                                <option value="">Tanzania</option>
                                <option value="">Thailand</option>
                                <option value="">Togo</option>
                                <option value="">Tokelau</option>
                                <option value="">Tonga</option>
                                <option value="">Trinidad and Tobago</option>
                                <option value="">Tunisia</option>
                                <option value="">Turkey</option>
                                <option value="">Turkmenistan</option>
                                <option value="">Turks and Caicos Islands</option>
                                <option value="">Tuvalu</option>
                                <option value="">U.S. Virgin Islands</option>
                                <option value="">Uganda</option>
                                <option value="">Ukraine</option>
                                <option value="">United Arab Emirates</option>
                                <option value="">United Kingdom</option>
                                <option value="">United States</option>
                                <option value="">United States Minor Outlying Islands</option>
                                <option value="">Uruguay</option>
                                <option value="">Uzbekistan</option>
                                <option value="">Vanuatu</option>
                                <option value="">Vatican</option>
                                <option value="">Venezuela</option>
                                <option value="">Vietnam</option>
                                <option value="">Wallis and Futuna</option>
                                <option value="">Western Sahara</option>
                                <option value="">Yemen</option>
                                <option value="">Zambia</option>
                                <option value="">Zimbabwe</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Address</label>
                            <input type="text" className="w-full border border-gray-400 px-3 py-2 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">City</label>
                            <input type="text" className="w-full border border-gray-400 px-3 py-2 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Zip / Postal code</label>
                            <input type="text" className="w-full border border-gray-400 px-3 py-2 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">VAT ID</label>
                            <input type="text" className="w-full border border-gray-400 px-3 py-2 outline-none" />
                        </div>
                        <button className="w-full bg-black text-white py-3 mt-4">Submit</button>
                    </form>
                </div>
            </section>

            {/* Map Section */}
            <section className="bg-cover bg-center bg-no-repeat" style={{backgroundImage:"url('https://static.wixstatic.com/media/9a280e_a1ac2b901a6b426d9460dfddbb4847a3~mv2.jpg/v1/fill/w_1225,h_656,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9a280e_a1ac2b901a6b426d9460dfddbb4847a3~mv2.jpg')",}}>
                <div className="bg-white/50 py-30">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="w-full h-72 md:h-96">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29747.920202933266!2d88.46181252874513!3d22.722472680627465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8a209b5283ced%3A0x4989765a0652bd78!2sBarasat%2C%20Kolkata%2C%20West%20Bengal%2C%20India!5e1!3m2!1sen!2sus!4v1768655448157!5m2!1sen!2sus"
                                className="w-full h-full"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* Find us Section */}
            <section className="mt-20 md:w-full">
                <h1 className="text-4xl font-bold text-center">FIND US ON INDIAMART</h1>
                <div className="flex justify-center pt-10 pb-20">
                    <div className="relative h-60 group">
                    <img
                        src="https://static.wixstatic.com/media/9a280e_7de837e326c643e4bf2153908ba231ad~mv2.png/v1/fill/w_468,h_440,al_c,q_85,enc_avif,quality_auto/9a280e_7de837e326c643e4bf2153908ba231ad~mv2.png"
                        alt="Indiamart"
                        className="h-40 md:h-60 transition-opacity duration-300 group-hover:opacity-0"
                    />
                    <img
                        src="https://static.wixstatic.com/media/a3c153_d3fd814e9af142c89f2aa36da4d38e5e~mv2.png/v1/fill/w_456,h_524,al_c,q_85,enc_avif,quality_auto/a3c153_d3fd814e9af142c89f2aa36da4d38e5e~mv2.png"
                        alt="Indiamart Hover"
                        className="h-40 md:h-60 absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;