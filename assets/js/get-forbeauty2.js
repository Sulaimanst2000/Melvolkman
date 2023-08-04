// get_product beauty
const getbeauty2_product = JSON.parse(localStorage.getItem("beauty2value"));
const showingbeauty2Data = document.querySelector(".show2-data");
// mapping product ceramic
const getting2beautyData = getbeauty2_product.map((data) => {
  return `     
  <a href="#">
                <div class="col-md-7 col-12"${data.id}>
                    <div class="product-picture">
                        <div class="pic-1">
                            <img src=${data.img_6} alt="">
                        </div>
                        <div class="pic-2">
                            <img src=${data.img_8} alt="">
                            <img src=${data.img_7} alt="">
                        </div>
                    </div>
                </div>
                <div class="col-md-5 col-12">
                    <div class="product-details-heading">
                        <h2 class="product-heading">${data.fb3tt}</h2>
                        <p class="product-details-price">$ ${data.fb3price} USD</p>
                        <div class="product-size">
                            <h4 class="size-heading">Size</h4>
                            <div class="sizes d-flex w-75 justify-content-between">
                                <p class="text-muted text-decoration-line-through">5x7</p>
                                <p class="text-muted text-decoration-line-through">8.5x11</p>
                                <p class="text-muted text-decoration-line-through">11x14</p>
                                <p class="text-muted text-decoration-line-through">16x20</p>
                                <p class="text-muted text-decoration-line-through">24x30</p>
                                <p class="text-muted text-decoration-line-through">36x46</p>
                            </div>
                            <div class="btn-out-of-stock">
                                <button><a href="#">Out of stock</a></button>
                            </div>
                            <div class="btn-down-line pb-3">
                                <p>Pay in 4 interest-free installments of <strong>$13.75</strong> with <a href="#"
                                        style="color: black; text-decoration: underline;">Learn more</a></p>
                            </div>
                            <hr>
                            <div class="product-description mt-5">
                                <p>
                                    For Beauty & Truth is an ongoing explorational series of limited edition, fine art
                                    botanical prints. Each print serves as a beautiful reminder that death is not the
                                    opposite of life, but the counterpart to birth. Everything must have its end, or
                                    there is no beginning. I wish to convey a sense of beauty, truth, and serenity
                                    through this botanical series.
                                    <br>
                                    <br>
                                    <em>“Death is the end of ephemeral life and the beginning of an infinite, eternal
                                        life”
                                        - Debasish Mridha</em>
                                    <br>
                                    <br>
                                    For Beauty & Truth No. 01 is printed on heavyweight (315gsm) museum-grade, archival
                                    cotton rag photo paper with archival pigment inks that will resist fading for
                                    hundreds of years with proper care. The pure cotton paper features substantial
                                    thickness and a beautiful luster finish resulting in outstanding reproduction of
                                    color, detail, and deep blacks.
                                    <br>
                                    <br>
                                    Each print is made-to-order, printed, hand-cut, and shipped from my studio on the
                                    coast of Maine. Limited Edition prints
                                    <br>
                                    <br>
                                    are signed and numbered, and include a <strong>Certificate of Authenticity</strong>.
                                    I recommend
                                    framing your print and placing the certificate in the back of the framed artwork in
                                    an envelope. Frame not included.
                                </p>
                            </div>
                            <div class="product-edition">
                                <p><strong>Editions</strong>

                                <p class="list-edition"><span class=""><strong>5x7:</strong></span> Limited Edition (of
                                    25)</p>
                                <p class="list-edition"><span class=""><strong>8.5x11:</strong></span> Limited Edition
                                    (of 75)</p>
                                <p class="list-edition"><span class=""><strong>11x14:</strong></span> Limited Edition
                                    (of 55)</p>
                                <p class="list-edition"><span class=""><strong>16x20:</strong></span> Limited Edition
                                    (of 25)</p>
                                <p class="list-edition"><span class=""><strong>24x30:</strong></span> Limited Edition
                                    (of 15)</p>
                                <p class="list-edition"><span class=""><strong>36x46:</strong></span> Limited Edition
                                    (of 5)</p>
                                <br>
                                As the edition runs low, pricing may increase due to the limited nature of the
                                print.
                                <br>
                                <br>
                                <strong>Framing</strong>
                                <br>
                                <br>
                                I highly encourage framing your artwork! The perfect frame will not only protect
                                your art, but it will enhance the artwork, giving it an even more beautiful presence
                                in your space. I recommend framing your print with a 2.5" mat or larger.
                                <br>
                                <br>
                                <strong>Please Note</strong>
                                <br>
                                <br>
                                The photos used in this listing are for illustrative purposes only and may not be to
                                scale. Cropping may occur depending on size. Please check the actual dimensions
                                provided in this listing + keep in mind that the colors you see on your monitor may
                                differ slightly from those on the artwork due to variations in monitor settings.
                                <br>
                                <br>
                                Print sizing refers to the paper size. Each print includes a 0.5"-1.5” white border,
                                depending on print size.
                                <br>
                                <br>
                                Due to the delicate nature, please handle the print only by its edges and refrain
                                from touching the surface when possible.</p>

                            </div>
                            <div class="accordion mb-5 mt-5 " id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true"
                                            aria-controls="collapseOne">
                                            Shipping & Details
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse "
                                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <p class="accordion-para">All artwork is packaged carefully with utmost care
                                                and shipped from my studio on the coast of Maine within 3-5 business
                                                days.

                                                Fine Art Prints are made-to-order, printed, and hand-cut in studio. Your
                                                print will be wrapped in archival paper and sent in a sturdy flat mailer
                                                or rolled in a sturdy tube (depending on size).

                                                U.S orders ship via USPS and include tracking and insurance.
                                                International shipping costs are calculated at checkout based on package
                                                weight and distance. Please note, international tracking is outside of
                                                my control and customs fees, import tax, or similar are the
                                                responsibility of the buyer.

                                                Returns & Exchanges

                                                Artwork is listed with as much detail and clarity as possible and each
                                                package is handled with utmost care. Thus, all sales are final. If you
                                                feel you have an extenuating circumstance, please reach out within 2
                                                business days of delivery.

                                                The flat mailers and print tubes are extremely tough and capable of
                                                surviving the roughest of shipping journeys, however in the rare event
                                                that your print arrives with any kind of damage, please reach out within
                                                2 business days and I will gladly replace it for you completely free of
                                                charge. Please send an email with an image of the package, print and
                                                certificate of authenticity as well as the order number and I will get
                                                the replacement arranged for you right away.

                                                Copyright © Mel Volkman

                                                Artwork is the sole property of Mel Volkman and is held under copyright
                                                even after purchase. I retain all rights to any and all artwork that I
                                                create. This includes rights to all images of sold & commissioned
                                                artwork. I retain the right to make reproductions of any and all artwork
                                                that I create unless you have also purchased full or partial rights to
                                                the artwork. If you are interested in purchasing full or partial rights,
                                                please get in touch.

                                                You may not reproduce the artwork in any way without written permission.
                                                When you purchase my artwork, you, the collector, have the right to
                                                display the artwork in your home or business but the artwork may not be
                                                resold or reproduced without my written permission.

                                                If you have any questions, <a href="#"
                                                    style="color: black; text-decoration: underline;">please get in
                                                    touch</a> </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </a>
    `
});
showingbeauty2Data.innerHTML = getting2beautyData.join("");