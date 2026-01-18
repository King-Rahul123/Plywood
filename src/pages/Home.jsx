function Home() {
    return (
        <main className="border-t-6 border-yellow-400 max-w-full md:w-full">
            {/* Hero section */}
            <section className="relative md:min-h-screen w-full bg-cover bg-top" style={{ backgroundImage: "url('/assets/9a280e_e181bb00408745a6adda7f5fb10583cb~mv2.avif')" }}>
                <div className="flex flex-col justify-center">
                    <div className="-mb-6 mt-50">
                        <img src="/assets/logo.png" alt="Logo" className="w-32 md:w-48 mx-auto mb-6"/>
                    </div>
                    <div className="relative z-10 flex flex-col items-center md:-mt-5 -mt-3 justify-center py-8 text-center px-4 bg-black/40">
                        <h1 className="text-3xl md:text-5xl font-extrabold text-lime-300">
                            Best Plywood <br />
                            Factory to Doorstep
                        </h1>
                        <p className="mt-4 text-sm md:text-xl text-gray-200">Transform Spaces with Lenador Impex</p>
                        <div className="mt-8 flex flex-col sm:flex-col gap-4">
                            <a href="tel:+917808468854" className="bg-white text-black w-40 py-2 rounded-full text-lg hover:bg-black hover:text-white transition">Call🤙</a>
                            <a href="https://wa.me/917808468854" target="_blank" rel="noreferrer" className="bg-lime-400 text-black w-40 py-2 rounded-full text-lg hover:bg-black hover:text-white transition">WhatsApp</a>
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
                        <p className="text-lg font-semibold">+91 78084 68854</p>
                        <div className="flex mt-4 gap-4">
                            <a href="tel:+917808468854" className="flex items-center justify-center text-white">
                                <i className="fas fa-phone text-3xl"></i>
                            </a>
                            <a href="https://wa.me/917808468854" className="flex items-center justify-center text-white">
                                <i className="fab fa-whatsapp text-3xl"></i>
                            </a>
                        </div>
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
                    <h1 className="md:text-7xl text-5xl font-bold font-serif">Our Products</h1>
                    <hr className="mt-15 mb-10" />
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        <div>
                            <div className="relative inline-block overflow-hidden group">
                                <img src="/assets/Alternate Grade.jpeg" alt="" className="w-full transition-transform md:h-90 md:w-80 duration-500 ease-out md:group-hover:scale-110" />
                                <span className="absolute top-0 left-0 bg-yellow-400 text-white text-lg px-3 py-1">Hostelling</span>
                            </div>
                            <p className="font-thin mt-2 text-lg"><strong>Alternate Grade</strong><br />Composition 5 layer UC 6 layer Lambu core & 2 layer Gurjan Face<br />Weight approx - 34 to 36 kg</p>
                        </div>
                        <div>
                            <div className="relative inline-block overflow-hidden group">
                                <img src="/assets/Red Core.jpeg" alt="" className="w-full transition-transform md:h-90 md:w-80 duration-500 ease-out md:group-hover:scale-110" />
                                <span className="absolute top-0 left-0 bg-yellow-400 text-white text-lg px-3 py-1">Hostelling</span>
                            </div>
                            <p className="font-thin mt-2 text-lg"><strong>Red Core</strong><br />Premium gurjan face<br />Composition 8 layer UC 3 layer lambu core top bottom & middle & 2 layer gurjan face</p>
                        </div>
                        <div>
                            <div className="relative inline-block overflow-hidden group">
                                <img src="/assets/Super MR grade.jpeg" alt="" className="w-full transition-transform md:h-90 md:w-80 duration-500 ease-out md:group-hover:scale-110" />
                                <span className="absolute top-0 left-0 bg-yellow-400 text-white text-lg px-3 py-1">Hostelling</span>
                            </div>
                            <p className="font-thin mt-2 text-lg"><strong>Super MR Grade</strong><br />Composition 11 layer lambu core & 2 layer okomo Face<br />Weight approx - 30 to 32 kg</p>
                        </div>
                        <div>
                            <div className="relative inline-block overflow-hidden group">
                                <img src="/assets/Marine Ply (BWP).jpeg" alt="" className="w-full transition-transform md:h-90 md:w-80 duration-500 ease-out md:group-hover:scale-110" />
                                <span className="absolute top-0 left-0 bg-yellow-400 text-white text-lg px-3 py-1">Hostelling</span>
                            </div>
                            <p className="font-thin mt-2 text-lg"><strong>Marine Ply (BWP)</strong><br />Full core construction with hardwood core & 2 layer 100% Gurjan face veneer <br />38 to 40 kg</p>
                        </div>
                        <div>
                            <div className="relative inline-block overflow-hidden group">
                                <img src="/assets/BWP.jpeg" alt="" className="w-full transition-transform md:h-90 md:w-80 duration-500 ease-out md:group-hover:scale-110" />
                                <span className="absolute top-0 left-0 bg-yellow-400 text-white text-lg px-3 py-1">Hostelling</span>
                            </div>
                            <p className="font-thin mt-2 text-lg"><strong>BWP / Boiling Water Resistant</strong><br />High-density core with calibrated layers & bonded hardwood veneers <br />36 to 38 kg</p>
                        </div>
                        <div>
                            <div className="relative inline-block overflow-hidden group">
                                <img src="/assets/BWP-AA Marine Ply.jpeg" alt="" className="w-full transition-transform md:h-90 md:w-80 duration-500 ease-out md:group-hover:scale-110" />
                                <span className="absolute top-0 left-0 bg-yellow-400 text-white text-lg px-3 py-1">Hostelling</span>
                            </div>
                            <p className="font-thin mt-2 text-lg"><strong>BWP-AA Marine Ply</strong><br />Full hardwood core with calibrated layers & 2 layer 100% Gurjan face veneer <br />38 to 40 kg</p>
                        </div>
                        <div>
                            <div className="relative inline-block overflow-hidden group">
                                <img src="/assets/BWP, Borer & Termite Resistant.jpeg" alt="" className="w-full transition-transform md:h-90 md:w-80 duration-500 ease-out md:group-hover:scale-110" />
                                <span className="absolute top-0 left-0 bg-yellow-400 text-white text-lg px-3 py-1">Hostelling</span>
                            </div>
                            <p className="font-thin mt-2 text-lg"><strong>BWP, Borer & Termite Resistant</strong><br />Hardwood core construction with calibrated layers & bonded face veneers<br />36 to 38 kg</p>
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
                    <h1 className="mt-9 md:text-7xl text-6xl font-bold font-serif md:px-5 mb-20">Product Range</h1>
                    <p className="text-white font-serif text-3xl pl-5 inline-block md:mr-100 mb-20">Our diverse product range includes Shuttering Plywood, Block Board, Flush Door, and Plywood of various grades. Each product is crafted with precision and expertise to meet a wide range of construction and design needs.</p>
                </div>
                <div className="grid md:grid-cols-2 p-8 -mt-16 mb-3 md:mb-0">
                    <img src="/assets/shuttering_product.png" alt="" className="border-r h-full" />
                    <div className="p-10 bg-yellow-400">
                        <h2 className="text-3xl md:text-6xl font-serif font-bold md:p-8">Shuttering Plywood</h2>
                        <p className="mt-4 text-lg md:text-2xl md:p-8 font-serif">Get ready to experience our Shuttering Plywood, expertly engineered to exceed the toughest standards! You can count on its reliable performance to shine on-site every time!</p>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 p-8 -mt-16 mb-3 md:mb-0">
                    <div className="p-10 bg-yellow-400">
                        <h2 className="text-3xl md:text-6xl font-serif font-bold">Block Board</h2>
                        <p className="mt-6 text-lg md:text-2xl font-serif">Our Block Board is crafted with precision, ensuring long-lasting performance and structural integrity.</p>
                    </div>
                    <img src="/assets/block_board.png" alt="" className="border-l w-full h-full" />
                </div>
                <div className="grid md:grid-cols-2 p-8 -mt-16 ">
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
                            <select className="w-full border border-gray-400 px-3 py-2 outline-none" defaultValue="">
                                <option value="" disabled>Select country</option>
                                <option value="Afganistan">Afganistan</option>
                                <option value="Aland Islands">Aland Islands</option>
                                <option value="Albania">Albania</option>
                                <option value="Algeria">Algeria</option>
                                <option value="American Samoa">American Samoa</option>
                                <option value="Andorra">Andorra</option>
                                <option value="Angola">Angola</option>
                                <option value="Anguilla">Anguilla</option>
                                <option value="Antarctica">Antarctica</option>
                                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                <option value="Argentina">Argentina</option>
                                <option value="Armenia">Armenia</option>
                                <option value="Aruba">Aruba</option>
                                <option value="Australia">Australia</option>
                                <option value="Austria">Austria</option>
                                <option value="Azerbaijan">Azerbaijan</option>
                                <option value="Bahamas">Bahamas</option>
                                <option value="Bahrain">Bahrain</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="Barbados">Barbados</option>
                                <option value="Belarus">Belarus</option>
                                <option value="Belgium">Belgium</option>
                                <option value="Belize">Belize</option>
                                <option value="Benin">Benin</option>
                                <option value="Bermuda">Bermuda</option>
                                <option value="Bhutan">Bhutan</option>
                                <option value="Bolivia">Bolivia</option>
                                <option value="Bonaire">Bonaire</option>
                                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                <option value="Botswana">Botswana</option>
                                <option value="Bouvet Island">Bouvet Island</option>
                                <option value="Brazil">Brazil</option>
                                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                <option value="British Virgin Islands">British Virgin Islands</option>
                                <option value="Brunei">Brunei</option>
                                <option value="Bulgaria">Bulgaria</option>
                                <option value="Burkina Faso">Burkina Faso</option>
                                <option value="Burundi">Burundi</option>
                                <option value="Combodia">Combodia</option>
                                <option value="Cameroon">Cameroon</option>
                                <option value="Canada">Canada</option>
                                <option value="Cape Verde">Cape Verde</option>
                                <option value="Cayman Islands">Cayman Islands</option>
                                <option value="Central American Republic">Central American Republic</option>
                                <option value="Chad">Chad</option>
                                <option value="Chile">Chile</option>
                                <option value="China">China</option>
                                <option value="Christmas Island">Christmas Island</option>
                                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                <option value="Colombia">Colombia</option>
                                <option value="Comoros">Comoros</option>
                                <option value="Congo (Brazzaville)">Congo (Brazzaville)</option>
                                <option value="Congo (Kinshasa)">Congo (Kinshasa)</option>
                                <option value="Cook Islands">Cook Islands</option>
                                <option value="Costa Rica">Costa Rica</option>
                                <option value="Croatia">Croatia</option>
                                <option value="Curacao">Curacao</option>
                                <option value="Cyprus">Cyprus</option>
                                <option value="Czech Republic">Czech Republic</option>
                                <option value="Denmark">Denmark</option>
                                <option value="Djibouti">Djibouti</option>
                                <option value="Dominica">Dominica</option>
                                <option value="Dominican Republic">Dominican Republic</option>
                                <option value="East Timor">East Timor</option>
                                <option value="Ecuador">Ecuador</option>
                                <option value="Egypt">Egypt</option>
                                <option value="El Salvador">El Salvador</option>
                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                <option value="Eritea">Eritea</option>
                                <option value="Estonia">Estonia</option>
                                <option value="Ethiopia">Ethiopia</option>
                                <option value="Falkland Islands">Falkland Islands</option>
                                <option value="Faroe Islands">Faroe Islands</option>
                                <option value="Fiji">Fiji</option>
                                <option value="Finland">Finland</option>
                                <option value="France">France</option>
                                <option value="French Guiana">French Guiana</option>
                                <option value="French Polynesia">French Polynesia</option>
                                <option value="Frech Southern Territory">Frech Southern Territory</option>
                                <option value="Gabon">Gabon</option>
                                <option value="Gambia">Gambia</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Germany">Germany</option>
                                <option value="Ghana">Ghana</option>
                                <option value="Gibraltar">Gibraltar</option>
                                <option value="Greece">Greece</option>
                                <option value="Greenland">Greenland</option>
                                <option value="Grenada">Grenada</option>
                                <option value="Guadeloupe">Guadeloupe</option>
                                <option value="Guam">Guam</option>
                                <option value="Guatemala">Guatemala</option>
                                <option value="Guernsey">Guernsey</option>
                                <option value="Guinea">Guinea</option>
                                <option value="Guinea-Bisssau">Guinea-Bisssau</option>
                                <option value="Guyana">Guyana</option>
                                <option value="Haiti">Haiti</option>
                                <option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option>
                                <option value="Honduras">Honduras</option>
                                <option value="Hong Kong">Hong Kong</option>
                                <option value="Hungary">Hungary</option>
                                <option value="Iceland">Iceland</option>
                                <option value="India">India</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Iraq">Iraq</option>
                                <option value="Ireland">Ireland</option>
                                <option value="Isle of Man">Isle of Man</option>
                                <option value="Israel">Israel</option>
                                <option value="Italy">Italy</option>
                                <option value="Jamaica">Jamaica</option>
                                <option value="Japan">Japan</option>
                                <option value="Jersey">Jersey</option>
                                <option value="Jordon">Jordon</option>
                                <option value="Kazakhastan">Kazakhastan</option>
                                <option value="Kenya">Kenya</option>
                                <option value="Kiribati">Kiribati</option>
                                <option value="Kosovo">Kosovo</option>
                                <option value="Kuwait">Kuwait</option>
                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                <option value="Laos">Laos</option>
                                <option value="Latvia">Latvia</option>
                                <option value="Lebanon">Lebanon</option>
                                <option value="Lesotho">Lesotho</option>
                                <option value="Liberia">Liberia</option>
                                <option value="Libya">Libya</option>
                                <option value="Liechtenstein">Liechtenstein</option>
                                <option value="Lithuania">Lithuania</option>
                                <option value="Luxembourg">Luxembourg</option>
                                <option value="Macau">Macau</option>
                                <option value="Macedonia">Macedonia</option>
                                <option value="Madagascar">Madagascar</option>
                                <option value="Malawi">Malawi</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Maldives">Maldives</option>
                                <option value="Mali">Mali</option>
                                <option value="Malta">Malta</option>
                                <option value="Marshall Islands">Marshall Islands</option>
                                <option value="Martinique">Martinique</option>
                                <option value="Mauritania">Mauritania</option>
                                <option value="Mauritius">Mauritius</option>
                                <option value="Mayotte">Mayotte</option>
                                <option value="Mexico">Mexico</option>
                                <option value="Micronesia">Micronesia</option>
                                <option value="Moldova">Moldova</option>
                                <option value="Monaco">Monaco</option>
                                <option value="Mongolia">Mongolia</option>
                                <option value="Montenegro">Montenegro</option>
                                <option value="Montserrat">Montserrat</option>
                                <option value="Morocco">Morocco</option>
                                <option value="Mozambique">Mozambique</option>
                                <option value="Mayanmar">Mayanmar</option>
                                <option value="Namibia">Namibia</option>
                                <option value="Nauru">Nauru</option>
                                <option value="Nepal">Nepal</option>
                                <option value="Netherlands">Netherlands</option>
                                <option value="Netherlands Antilles">Netherlands Antilles</option>
                                <option value="New Caledonia">New Caledonia</option>
                                <option value="New Zealand">New Zealand</option>
                                <option value="Nicaragua">Nicaragua</option>
                                <option value="Niger">Niger</option>
                                <option value="Nigeria">Nigeria</option>
                                <option value="Niue">Niue</option>
                                <option value="Norfolk Island">Norfolk Island</option>
                                <option value="Northern Mariana Island">Northern Mariana Island</option>
                                <option value="Norway">Norway</option>
                                <option value="Oman">Oman</option>
                                <option value="Pakistan">Pakistan</option>
                                <option value="Palau">Palau</option>
                                <option value="Palastinian Territories">Palastinian Territories</option>
                                <option value="Panama">Panama</option>
                                <option value="Papua New Guinea">Papua New Guinea</option>
                                <option value="Paraguay">Paraguay</option>
                                <option value="Peru">Peru</option>
                                <option value="Philippines">Philippines</option>
                                <option value="Pitcairn">Pitcairn</option>
                                <option value="Poland">Poland</option>
                                <option value="Portugal">Portugal</option>
                                <option value="Puerto Rico">Puerto Rico</option>
                                <option value="Qatar">Qatar</option>
                                <option value="Republic of Cote d'loire">Republic of Cote d'loire</option>
                                <option value="Reunion">Reunion</option>
                                <option value="Romania">Romania</option>
                                <option value="Russia">Russia</option>
                                <option value="Rwanda">Rwanda</option>
                                <option value="Saint Barthelemy">Saint Barthelemy</option>
                                <option value="Saint Helena">Saint Helena</option>
                                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                <option value="Saint Lucia">Saint Lucia</option>
                                <option value="Saint Martin">Saint Martin</option>
                                <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                                <option value="Samoa">Samoa</option>
                                <option value="San Marino">San Marino</option>
                                <option value="Sau Tome and Principe">Sau Tome and Principe</option>
                                <option value="Saudi Arabia">Saudi Arabia</option>
                                <option value="Senegal">Senegal</option>
                                <option value="Sarbia">Sarbia</option>
                                <option value="Seychelles">Seychelles</option>
                                <option value="Sierra Leone">Sierra Leone</option>
                                <option value="Singapore">Singapore</option>
                                <option value="Sint Maarten">Sint Maarten</option>
                                <option value="Slovakia">Slovakia</option>
                                <option value="Slovenia">Slovenia</option>
                                <option value="Solomon Islands">Solomon Islands</option>
                                <option value="Somalia">Somalia</option>
                                <option value="South Africa">South Africa</option>
                                <option value="South Georgia and the South Sandwitch Islands">South Georgia and the South Sandwitch Islands</option>
                                <option value="South Korea">South Korea</option>
                                <option value="South Sudan">South Sudan</option>
                                <option value="Spain">Spain</option>
                                <option value="Sri Lanka">Sri Lanka</option>
                                <option value="Sudan">Sudan</option>
                                <option value="Suriname">Suriname</option>
                                <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                <option value="Swaziland">Swaziland</option>
                                <option value="Sweden">Sweden</option>
                                <option value="Switzerland">Switzerland</option>
                                <option value="Taiwan">Taiwan</option>
                                <option value="Tajikistan">Tajikistan</option>
                                <option value="Tanzania">Tanzania</option>
                                <option value="Thailand">Thailand</option>
                                <option value="Togo">Togo</option>
                                <option value="Tokelau">Tokelau</option>
                                <option value="Tonga">Tonga</option>
                                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                <option value="Tunisia">Tunisia</option>
                                <option value="Turkey">Turkey</option>
                                <option value="Turkmenistan">Turkmenistan</option>
                                <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                <option value="Tuvalu">Tuvalu</option>
                                <option value="U.S. Virgin Islands">U.S. Virgin Islands</option>
                                <option value="Uganda">Uganda</option>
                                <option value="Ukraine">Ukraine</option>
                                <option value="United Arab Emirates">United Arab Emirates</option>
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="United States">United States</option>
                                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                <option value="Uruguay">Uruguay</option>
                                <option value="Uzbekistan">Uzbekistan</option>
                                <option value="Vanuatu">Vanuatu</option>
                                <option value="Vatican">Vatican</option>
                                <option value="Venezuela">Venezuela</option>
                                <option value="Vietnam">Vietnam</option>
                                <option value="Wallis and Futuna">Wallis and Futuna</option>
                                <option value="Western Sahara">Western Sahara</option>
                                <option value="Yemen">Yemen</option>
                                <option value="Zambia">Zambia</option>
                                <option value="Zimbabwe">Zimbabwe</option>
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
                        <a href="https://www.indiamart.com/lenador-impex/">
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
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;