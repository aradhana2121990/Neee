import React, { Fragment } from "react";
// import { NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';
// eslint-disable-next-line no-unused-vars
const noAction = (e) => {
  e.preventDefault();
};
const DetailsContent = (props) => {
  // const { title, content, date, blog } = props;

  return (
    <Fragment>
      <div className="post-details">
        <div className="post-head" style={{ marginLeft: "-5%" }}>
          <div className="post-audio">
            <img
              src="../assets/img/blog-img-11.jpeg"
              alt="mothersfood"
              style={{ width: "700px" }}
            />
          </div>
        </div>
        <div className="post-content" style={{ marginTop: "5%" }}>
          <div className="post-header">
            <h3>
              <strong>Best Chicken Biryani and Its Recipes.</strong>
            </h3>
            <ul className="post-meta d-flex" style={{ marginTop: "3%" }}>
              <li>02-01-2021</li>
            </ul>
          </div>
          <hr />

          <div className="m-bottom-40">
            <p style={{ textAlign: "justify" }}>
              Biryani, a dish well known in almost all Indian states and loved
              by majority of Indian population. Most researchers believe biryani
              originated from Persian cuisine and was inculcated or brought to
              the Indian subcontinent by the Mughals. <br />
            </p>
            <p style={{ textAlign: "justify" }}>
              Biryani was then further Indianized- included more flavours and
              spices from the royal kitchen of the Mughals. There are numerous
              biryani recipes that are famous and loved by people all over the
              world. Below are few of the top most biryani recipes.
              <br />
            </p>
            <p style={{ textAlign: "justify" }}>
              One of the most consumed biryani recipes is chicken and mutton
              biryani. And the best city to eat a flavourful spicy biryani is
              Hyderabad. Hyderabadi Chicken/ mutton Dum Biryani we can say is
              world famous. It is full of spices, flavours and is slow cooked
              and served steaming hot. Chicken biryani making is usually with
              chicken thigh and breast pieces marinated in Indian spices, cooked
              and then half cooked rice is added to the gravy and cooked
              further. Mutton biryani has a longer marination time so that the
              pieces become softer even before cooking. One of the popular
              spices used in Hyderabadi biryani is garam masala. Few of the
              world-famous restaurants in Hyderabad are- Shadab, Shah Ghouse,
              Bawarchi, Paradise (even celebrities prefer biryani here),
              Ulvacharu, Pakwaan etc. <br />
            </p>
            <p style={{ textAlign: "justify" }}>
              Then comes Veg biryani. Vegetable biryani is prepared in a similar
              recipe as chicken or mutton biryani recipe however different types
              of vegetables are added as substitute to the meat. Veg biryani is
              quite delicious as well. All the vegetarians out there love veg
              biryani and enjoy it like no other vegetarian dish. Hyderabad is
              famous for veg dum biryani recipe as well. <br />
              Biryani ingredients used in vegetable biryani are same as chicken
              biryani recipe or mutton biryani recipe. Again, there are many
              places all over India where you get delicious veg biryani. Delhi
              Darbar in Mumbai, Bawarchi in Hyderabad etc.
              <br />
            </p>
            <p style={{ textAlign: "justify" }}>
              The next favourite biryani recipe for Indians is paneer biryani.
              From the name it is clear that paneer biryani is made with paneer.
              The biriyani cooking process of paneer is similar to chicken and
              mutton biryani except that there is mostly no marination involved.
              Vegetarians enjoy paneer biryani as a special on occasions and
              festivals. Paneer biryani is enjoyed all over india and there are
              few variations in recipes regionally. Paneer biryani is mostly
              famous in vegetarian as well as non-vegetarian restaurants.
              <br />
            </p>

            <p style={{ textAlign: "justify" }}>
              Another variant or extended version of paneer biryani is the
              paneer tikka biryani. Its meaning can be derived from its name
              itself. Paneer is first made into tandoori paneer tikkas and then
              added into the biryani preparation process unlike normal paneer
              biryani where paneer is directly added. Marination of paneer in
              the tikka masala is the most important step. The ingredients which
              go into the marination are vey aromatic, make paneer tastier from
              inside. Curd is the main ingredient as it lets the masalas
              penetrate deep into paneer.
              <br />
            </p>
            <p style={{ textAlign: "justify" }}>
              The next favourite biryani for vegetarians is mushroom biryani. It
              can be made instantly. It is also called one pot biryani since the
              whole cooking process can be completed by cooking in just one pot.
              Most people prefer mushroom biryani as it is loaded with nutrients
              and anti-oxidants and is very good for improving immunity. The
              preparation process of mushroom biryani is somewhat similar to egg
              biryani as there is no marination involved. Mushrooms are first
              stir fried and partially cooked in a gravy full of masalas, herbs
              and spices and then par boiled rice is added to the gravy and
              cooked in the same pot. Many vegetarians enjoy mushroom biryani.
              <br />
            </p>
            <p style={{ textAlign: "justify" }}>
              For all the eggetarians out there, their king of biryani recipes
              is egg biryani. It is also called ande ki biryani. Egg biryani
              recipe is made with boiled eggs. It is similar to chicken biriyani
              making; however, the only difference is that boiled eggs are fried
              in oil first. And then biriyani ingredients and the recipe are
              followed same as mutton biryani recipe or any other dum biryani
              recipe.
              <br />
            </p>
            <p style={{ textAlign: "justify" }}>
              Fish biryani is next on the list. Fish biryani recipe is
              comparatively more famous in the coast lines of India. Especially
              Malabar fish biryani is the most loved in the coastal states of
              India. Again, fish biryani recipe is prepared with different types
              os fish; boneless and with bone. Biryani ingredients used for
              making fish biryani are the same however the steps in biryani
              making differ. Fish is first marinated and then fried in oil until
              its cooked 50% and then the same biryani making is followed;
              cooking the rice, cooking gravy and then adding the fish and then
              the gravy with fish is cooked along with rice and served hot.
              <br />
            </p>
            <p style={{ textAlign: "justify" }}>
              Another variety of sea food biryani is prawn biryani also known as
              shrimp biryani. This has many regional favourite recipes and is
              most consumed in the coastal states. It is again an aromatic
              biryani making process prepared by cooking shrimp, basmati rice,
              herbs, spices and other biryani ingredients. Prawns biryani has
              rather a different taste when compared to chicken biryani or
              mutton biryani. It is because of the taste to the shrimp meat.
              Prawns biryani is cooked using the best quality rice and like any
              other biriyani making process, layering process is used where in a
              layer of rice and a layer of gravy of prawns is cooked. In few
              Malabar coast areas, it is also called chemmeen biryani
              <br />
            </p>
            <p style={{ textAlign: "justify" }}>
              A very popular biryani in the recent times is donne biryani. Donne
              biryani is a famous biryani originated in Bangalore, Karnataka.
              Donne means a cup made out a leaf, preferably nut palm leaf. So
              donne biryani is a biryani which is served in a big cup made out
              of a leaf. The preparation process of donne biryani is similar to
              pulao as the cooking involves cooking with chicken/mutton stock.
              It is not like the traditional mutton or chicken biryani where
              rice and meat are layered and cooked. Rather it is cooked with
              stock and hence the whole rice is lot more flavourful. <br />
            </p>
            <p style={{ textAlign: "justify" }}>
              Chicken 65 biryani, boneless biryani is different from dum
              biryani. In chicken 65 biryani or boneless biryani, chicken is
              first cooked or fried and then added to the flavoured rice. But in
              the traditional chicken dum biryani and mutton dum biryani, meat
              and rice are cooked with aromatic herbs and spices in the dum
              method. Which is using a dough or a muslin cloth to seal the
              vessel and let the meat and rice cook in the heat and steam.
              <br />
            </p>
            <p style={{ textAlign: "justify" }}>
              Another popular variant of biryani is the beef biryani. Beef
              biryani is again a flavourful rice-based dish cooked along with
              biryani ingredients, spices, herbs and beef. Beef biryani is also
              known as Kalyani biryani. Beef biryani is a cheaper version of the
              chicken or mutton biryani available out there as the meat is
              comparatively cheaper than mutton or chicken. The preparation
              process of beef biryani is similar to any popular dum biryani
              recipes. Beef biryani has a lot of demand in Hyderabad and we can
              say that all over India, beef biryani is highly consumed and has
              high demand in Hyderabad.
              <br />
            </p>
            <p style={{ textAlign: "justify" }}>
              Soya is a bean derived from a plant in the Asian region and is
              highly used to replace animal meat because of the similarities in
              taste and nutritional value. It is high in protein content. Hence
              Soya Biryani is equally famous among people who do not eat animal
              products. Soya chunks have protein content higher than milk, eggs.
              Soya is also called meal maker and hence the biryani is also known
              as meal maker biryani. It is a very high protein dish served just
              by itself or with a side of raitha and onions, adding a masala
              gravy is optional. Soya biryani is usually cooked in a pressure
              cooker unlike the traditional biryani making process. Soya chunks
              are first boiled and then added to the gravy with masala and
              lastly rice is added and then it is pressure cooked and served
              hot.
              <br />
            </p>
            <p style={{ textAlign: "justify" }}>
              Thalapakattu biryani is one of the unique biryani’s in India. It
              is also called Dindigul Thalapakattu biryani. Its origin is said
              to be in Tamil Nadu. It is one of Tamil Nadu’s proud dishes which
              has a taste and preparation process. Thalapakattu means “turban”
              in Tamil. Dindigul Thalapakattu is the name of the restaurant
              which serves Thalapakattu biryani, started in the year 1957 by
              Nagasamy Naidu. Nagasamy Naidu wore a turban and hence the biryani
              gets its name from there. The distinctive flavour of this biryani
              comes mainly from Seeraga Samba rice, similar to Jeerakashala or
              Kaima rice used in Malabar Biryani. It is cooked in a pressure
              cooker.
              <br />
            </p>
            <p style={{ textAlign: "justify" }}>
              Next famous biryani is the matka biryani. It is completely similar
              to the Hyderabadi dum biryani. However, the only major difference
              is that it is cooked in an earthenware pot. Matka means pot in
              Hindi hence the name of the biryani. The complete preparation
              process, ingredients used in biryani making is the same. The taste
              of matka biryani is amazing as well. It has the flavour of
              earthenware pot which makes it different form the regular
              biryanis.
              <br />
            </p>
            <p style={{ textAlign: "justify" }}>
              Another variant in the matka biryani category is kudukkachi
              biryani. It is similar to matka biryani. It is very famous and
              usually made in Kannur in earthen pots.
              <br />
            </p>
            <p style={{ textAlign: "justify" }}>
              Another special biryani among all the famous biryanis in the
              Indian subcontinent is kadai biryani. Kadai means a wok. Kadai
              biryani is prepared in a wok, hence the name. Again, the process
              is similar Hyderabadi chicken biryani recipe except that it is
              made in a wok and prepared really with slow cooking as it is
              cooked in the wok. Biryani masala ingredients and everything
              remains the same except the vessel in which biryani is prepared.
              Kadai biryani is mostly famous in the southern parts on India.
              <br />
            </p>
            <p style={{ textAlign: "justify" }}>
              Next famous biryani is aloo biryani. Aloo biryani is made with
              baby potatoes in most biryani making processes. Regular potatoes
              can also be used. Potatoes can be deep fried and sued or else
              boiled and used. Aloo biryani is one of vegetarians’ regular
              favourites, but usually people prefer to mix all veggies and cook
              instead of just aloo. The spicy feel of this biryani would differ
              with regions and demography.
              <br />
            </p>
            <p style={{ textAlign: "justify" }}>
              Mughlai biryani is one of the biryanis served in India, which is
              believed to served and feasted on by the emperors of the Mughal
              dynasty. Mughal biryani is made with top quality basmati rice,
              tender lamb meat, aromatic spices, biryani ingredients, saffron
              and deep-fried onions. Mughlai biryani was mostly served for
              special occasions like Eid to the whole region of the Mughal
              reign. Mughal biryani is complemented by salan and raitha by the
              side. Once again, Hyderabadi Mughlai biryani is one of the most
              famous Mughlai biryanis. Many places serve this dish like- Shadab,
              shah ghouse, Bawarchi, Pakwaan.
              <br />
            </p>
            <p style={{ textAlign: "justify" }}>
              Ice biryani is another dish is very famous in remote villages of
              Tamil Nadu. Ice biryani is not actually biryani. It is left over
              rice is cooked with lots of water. It is paired with different
              types of spicy curries. It is called ice biryani as it is incurs
              very low cost of preparation and easy to cook. It is basically
              plain rice cooked with excess amounts of water which makes the
              rice very soft and is consumed with curries and gravies of
              different kinds. It is mostly eaten in the southern rural parts of
              India.
              <br />
            </p>
            <p style={{ textAlign: "justify" }}>
              Along with rossogollas and fish dishes, Kolkata biryani tastes
              amazing as well. Kolkata biryani now is gaining momentum and
              flourishing in the recent past giving a strong competition to
              Hyderabadi biryani. It is a modified version of or inspired
              version of Lucknow biryani. Lucknow and Kolkata biryani focus more
              on the meat flavours in the spices and rice unlike Hyderabad
              biryani which focuses on spices, masalas and then meat. Compared
              to Lucknow biryani, Kolkata biryani’s meat to rice ratio is
              lesser. And potatoes were added instead of meat for the vegetarian
              version.
              <br />
            </p>
            <p style={{ textAlign: "justify" }}>
              Another famous or well consumed biryani is the bhai veetu biryani.
              It is basically a mutton biryani prepared at home by Muslims.
              Muslim style mutton biryani prepared by Tamilians is called bhai
              veetu biryani. This biryani is cooked in similar style to
              Hyderabad dum biryani. Seeraga samba rice- a variety is basmati
              rice is used to cook bhai veetu biryani. Meat is well marinated
              and then cooked in all the biriyani ingredients. The Seeraga samba
              rice makes the biryani even more flavourful. Unlike regular rice,
              this rice is little on the thicker or fatter side (each grain).
              <br />
            </p>
            <p style={{ textAlign: "justify" }}>
              Next variant among biryanis is muttai biryani. Muttai biryani is
              basically egg biryani in Tamil. Eggs are boiled and kept aside.
              Basmati rice is then cooked in spices and biryani ingredients.
              Then egg masala gravy is prepared. It is prepared with spices and
              biryani ingredients. Then cooked rice is spread layer wise and the
              egg masala gravy is added and stirred by adding other powder
              spices as well. It is garnished with fried onions to give it a
              rich taste. <br />
            </p>
            <p style={{ textAlign: "justify" }}>
              Kheema biryani is the next variant of famous biryanis. It is
              subtly spicy or highly spicy depending on the regional prefernces.
              It is prepared with minced meat of the lamb. Kheema is first
              marinated in aromatic spices and all biryani ingredients used for
              biryani preparation and keot aside. Then good quality basmati rice
              is cooked in aromatic spices, salt and water. Then Kheema ic
              cooked with sll the ingredients and without adding water for some
              time. Then par boiled rice is added to the kheema and cooked in
              the hyderabadi dum biryani style. Kheema biryani is garnished with
              fried onions and coriander and served hot. It is also called
              Thalassery biryani in Malabar region.
              <br />
            </p>
            <p style={{ textAlign: "justify" }}>
              Tomato biryani or thakkali biryani is another famous biryani which
              is cooked with tomatoes. The main ingredient which specifies and
              makes this biryani stand out from other biryanis is coconut milk.
              It makes a good Tamil biryani and mostly only preferred in
              southern parts of India. It is a very easy dish to prepare and can
              be made in 15 minutes in just one pressure cooker.
              <br />
            </p>
            <p style={{ textAlign: "justify" }}>
              Jackfruit biryani also known as kathal biryani is a mildly spiced
              biryani. Raw jack fruit is first prepared with biryani masala
              ingredients and made into a gravy and then half boiled basmati ric
              is added to this gravy and cooked in the dum preparation method
              and served steaming hot. It is one of the vegetarian’s favourite
              biryani. Also it is mostly consumed in the Southern states of
              India.
              <br />
            </p>
            <p style={{ textAlign: "justify" }}>
              Tandoori chicken biryani is another famous version of the usual
              chicken dum biryani. Tandoori chicken biryani is similar to
              chicken dum biryani but instead of raw chicken pieces cooked into
              gravy, tandoori chicken is added to the biryani. The style of
              cooking tandoori biryani is same but he spices, ingredients used
              for marination and cooking are different. Tandoori chicken is
              first marinated for more than 6 hours and then cooked in a
              tandoor. And then biryani gravy and rice is prepared and cooked
              with all the spices and masalas. Then the gravy and rice are mixed
              and tandoori pieces are served with this mixture, this is Tandoori
              chicken biryani.
              <br />
            </p>
            <p style={{ textAlign: "justify" }}>
              Kuska biryani is another biryani. Kuska is the name of the variety
              of rice. Kuska rice is a variety of rice. Kuska biryani is the
              recipe of biryani which is made with kuska rice. IT is quite well
              known in the southern states of India in many hotels.
              <br />
            </p>
            <p style={{ textAlign: "justify" }}>
              When people are tired of eating the same old biryani, then they
              shift to chettinad biryani. Chettinad is an area in Tamil nadu.
              The spices used in this biryani is a lot different from the
              various biryanis used hence the unique taste. Few extra spices
              other than biryani ingredients are used int his biryani. Coconut
              milk combined with these spices and masalas is what gives this
              masala its unique and delicious taste.
              <br />
            </p>
            <p style={{ textAlign: "justify" }}>
              Another variety of biryani is white biryani. This is basically
              cooked using the same method however the name is derived from the
              colour itself. This biryani is white in colour. It gets its white
              name since the spices and masalas are all put in a potli (packet)
              and then cooked. So that brown, golden colour of the masalas
              doesn’t get into the biryani rice. Hence it is called white
              biryani.
              <br />
            </p>
            <p style={{ textAlign: "justify" }}>
              Another biryani is a semiya biryani. Semiya or Vermicelli biryani
              is very easy to cook and is mostly consumed by people who are in a
              diet and cannot eat rice. Semiya is first toasted before adding to
              the gravy which is cooked with all the spices and masalas. Semiya
              takes hardly 5-10 minutes to cook. Hence the veggie sizes are
              chopped very small and are cooked in the Semiya biryani.
              <br />
            </p>
            <p style={{ textAlign: "justify" }}>
              Chana biryani is made with chickpeas. Chickpeas are soaked
              overnight in water. And then the next day, rice is par boiled with
              spices and salt. Then the gravy for chickpeas is prepared with all
              the biryani spices and masalas. Then it is layered with par boiled
              rice and then cooked in the dum biryani preparation method.
              <br />
            </p>
            <p style={{ textAlign: "justify" }}>
              Sindhi biryani is uniquely tasty and is different from other
              biryanis. The start ingredients are roasted spices and chopped
              chilies. Another distinctive ingredient is plums. These are added
              for a rich flavour.
              <br />
            </p>
            <p style={{ textAlign: "justify" }}>
              Another variety of famous biryani is Dindigul biryani. Most
              popularly made in Tamil Nadu region. This is a very unique biryani
              as it has star ingredients as- pepper and curd.
              <br />
            </p>
            <p style={{ textAlign: "justify" }}>
              Ambur Biryani is one more biryani from the region of Tamil Nadu.
              This variation of biryani has meat -chicken or mutton. Ambur
              biryani is different in the way the meat is prepared- meat is
              soaked in curd, flavoured with coriander and mint. Again, Seeraga
              samba rice is used to make Ambur biryani along with other spices.
              It is usually served with a side of brinjal curry.
              <br />
            </p>
            <p style={{ textAlign: "justify" }}>
              Tehari biryani is a traditional biryani is made out of meat,
              however it was specially created for the vegetarian Hindu
              bookkeepers at the Mughal court. Tehari biryani consists of
              potatoes, carrots, several veggies and a lot of aromatic spices.
              This a great delight for all the vegetarians out there.
              <br />
            </p>
            <p style={{ textAlign: "justify" }}>
              These are the different kinds of and varieties of biryanis
              available, loved and eaten all over the Indian sub-continent.
            </p>
          </div>
        </div>
      </div>
      {/*<!-- ends: .comment-form -->*/}
    </Fragment>
  );
};
// const mapStateToProps = (state) => {
//     return {
//         blog: state.blog
//     }
// }
// export default connect(mapStateToProps)(DetailsContent);
export default DetailsContent;
