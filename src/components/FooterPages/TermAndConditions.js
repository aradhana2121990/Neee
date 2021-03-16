import React, { Fragment } from "react";
import NavBarListing from "../navBar/navbarListing";
import NavBarlisting2 from "../navBar/Navbarlisting2";
// import { NavLink } from 'react-router-dom';
// import Header from '../layout/header/slider-header-2';
// import Footer from '../layout/footer/footer-dark-3';
// import {AccordianOne} from '../content/element/accordians/accordians';

// const noAction = e => e.preventDefault();
const Project = () => {
  var isLoggedin = localStorage.getItem("isLogging");
  return (
    <Fragment>
      {isLoggedin === "true" ? <NavBarListing /> : <NavBarlisting2 />}
      <section
        className="section-bg p-top-100 p-bottom-110"
        style={{ marginTop: "-5%" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="mb-5">
                <div className="divider divider-simple text-center">
                  <h1>
                    <b>TERMS OF USE</b>
                  </h1>
                </div>
              </div>
            </div>
            {/*<!-- ends: .col-lg-12 -->*/}
          </div>

          <div className="post-details text-left">
            <div className="post-content">
              <div className="post-body">
                <div className="m-bottom-40">
                  <ul className="number-list number--list3">
                    <li
                      style={{ textAlign: "justify", fontSize: "15px" }}
                      className="numbers-roman"
                    >
                      These terms of use (the " Terms of Use") govern your use
                      of our website www. MothersFood.in (the " Website") and
                      our "MothersFood" application for mobile and handheld
                      devices (the " App"). The Website and the App are jointly
                      referred to as the "Platform". Please read these Terms of
                      Use carefully before you use the services. If you do not
                      agree to these Terms of Use, you may not use the services
                      on the Platform, and we request you to uninstall the App.
                      By installing, downloading or even merely using the
                      Platform, you shall be contracting with MothersFood and
                      you signify your acceptance to the Terms of Use and other
                      MothersFood policies (including but not limited to the
                      Cancellation & Refund Policy, Privacy Policy and Take Down
                      Policy) as posted on the Platform from time to time, which
                      takes effect on the date on which you download, install or
                      use the Services, and create a legally binding arrangement
                      to abide by the same.
                    </li>
                    <li
                      style={{ textAlign: "justify", fontSize: "15px" }}
                      className="numbers-roman"
                    >
                      The Platform is operated and owned by Mothers Kitchens
                      &amp; Catering Services Private Limited, a company
                      incorporated under the Companies Act, 2013 and having its
                      registered office at H. No 1-8-450-1, A-49, Ashirwad
                      Building, Indian Airlines Colony, StreetNo.3, LaneNo.3,
                      Begumpet Hyderabad - 500003 Telangana. For the purpose of
                      these Terms of Use, wherever the context so requires,
                      "you" shall mean any natural or legal person who has
                      agreed to become a buyer or customer on the Platform by
                      providing Registration Data while registering on the
                      Platform as a registered user using any computer systems.
                      The terms "Mothers Kitchen", "we", "us" or "our" shall
                      mean MothersFood & Catering Services Private Limited.
                    </li>
                    <li
                      style={{ textAlign: "justify", fontSize: "15px" }}
                      className="numbers-roman"
                    >
                      MothersFood enables transactions between participant
                      Home-Chefs/merchants and buyers, dealing in prepared food
                      and beverages (" Platform Services"). The buyers ("
                      Buyer/s") can choose and place orders (" Orders") from
                      variety of products listed and offered for sale by various
                      neighbourhood merchants including but not limited to the
                      Home-Chefs and eateries (" Merchant/s"), on the Platform
                      and MothersFood enables delivery of such orders at select
                      localities of serviceable cities across India (" Delivery
                      Services"). The Platform Services and Delivery Services
                      are collectively referred to as “Services". For the
                      delivery services rendered, MothersFood may charge you
                      delivery fee (inclusive of applicable taxes whenever not
                      expressly mentioned)
                    </li>
                    <li
                      style={{ textAlign: "justify", fontSize: "15px" }}
                      className="numbers-roman"
                    >
                      <h6 style={{ textAlign: "justify", fontSize: "15px" }}>
                        <b>AMENDMENTS</b>
                      </h6>
                      These Terms of Use are subject to modifications at any
                      time. We reserve the right to modify or change these Terms
                      of Use and other MothersFood policies at any time by
                      posting changes on the Platform, and you shall be liable
                      to update yourself of such changes, if any, by accessing
                      the changes on the Platform. You shall, always, be
                      responsible for regularly reviewing the Terms of Use and
                      the other MothersFood policies and note the changes made
                      on the Platform. Your continued usage of the services
                      after any change is posted constitutes your acceptance of
                      the amended Terms of Use and other MothersFood policies.
                      As long as you comply with these Terms of Use, MothersFood
                      grants you a personal, non-exclusive, non-transferable,
                      limited privilege to access, enter, and use the Platform.
                      By accepting these Terms of Use, you also accept and agree
                      to be bound by the other terms and conditions and
                      MothersFood policies (including but not limited to
                      Cancellation & Refund Policy, Privacy Policy and Notice
                      and Take Down Policy) as may be posted on the Platform
                      from time to time.
                    </li>
                    <li
                      style={{ textAlign: "justify", fontSize: "15px" }}
                      className="numbers-roman"
                    >
                      <h6 style={{ textAlign: "justify", fontSize: "15px" }}>
                        <b>Use of Platform and Services</b>
                      </h6>
                      <ol className="number-list number--list1">
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          All commercial/contractual terms are offered by and
                          agreed to between Buyers and Merchants alone. The
                          commercial/contractual terms include without
                          limitation price, taxes, shipping costs, payment
                          methods, payment terms, date, period and mode of
                          delivery, warranties related to products and services
                          and after sales services related to products and
                          services. MothersFood does not have any control or
                          does not determine or advise or in any way involve
                          itself in the offering or acceptance of such
                          commercial/contractual terms between the Buyers and
                          Merchants. MothersFood may, however, offer support
                          services to Merchants in respect to order fulfilment,
                          payment collection, call centre, and other services,
                          pursuant to independent contracts executed by it with
                          the Merchants.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          MothersFood does not make any representation or
                          warranty as to the item-specifics (such as legal
                          title, creditworthiness, identity, etc.) of any of the
                          Merchants. You are advised to independently verify the
                          bona fides of any particular Merchant that you choose
                          to deal with on the Platform and use your best
                          judgment in that behalf. All Merchant offers and third
                          party offers are subject to respective party terms and
                          conditions. MothersFood takes no responsibility for
                          such offers.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          MothersFood neither make any representation or
                          warranty as to specifics (such as quality, value,
                          scalability, etc.) of the products or services
                          proposed to be sold or offered to be sold or purchased
                          on the Platform nor does implicitly or explicitly
                          support or endorse the sale or purchase of any
                          products or services on the Platform. MothersFood
                          accepts no liability for any errors or omissions,
                          whether on behalf of itself or third parties.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          MothersFood is not responsible for any non-performance
                          or breach of any contract entered into between Buyers
                          and Merchants on the Platform. MothersFood cannot and
                          does not guarantee that the concerned Buyers and/or
                          Merchants will perform any transaction concluded on
                          the Platform. MothersFood is not responsible for
                          unsatisfactory or non-performance of services or
                          damages or delays as a result of products which are
                          out of stock, unavailable or back ordered.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          MothersFood is operating an online marketplace and
                          assumes the role of facilitator, and does not at any
                          point of time during any transaction between Buyer and
                          Merchant on the Platform come into or take possession
                          of any of the products or services offered by
                          Merchant. At no time shall MothersFood hold any right,
                          title or interest over the products nor shall
                          MothersFood have any obligations or liabilities in
                          respect of such contract entered into between Buyer
                          and Merchant.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          MothersFood is only providing a platform for
                          communication and it is agreed that the contract for
                          sale of any of the products or services shall be a
                          strictly bipartite contract between the Merchant and
                          the Buyer. In case of complaints from the Buyer
                          pertaining to food efficacy, quality, or any other
                          such issues, MothersFood shall notify the same to
                          Merchant and shall also redirect the Buyer to the
                          consumer call centre of the Merchant. The Merchant
                          shall be liable for redressing Buyer complaints. In
                          the event you raise any complaint on any Merchant
                          accessed using our Platform, we shall assist you to
                          the best of our abilities by providing relevant
                          information to you, such as details of the Merchant
                          and the specific Order to which the complaint relates,
                          to enable satisfactory resolution of the complaint.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          Please note that there could be risks in dealing with
                          underage persons or people acting under false
                          pretence.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          MothersFood - Use of the Website and Apps (Android and
                          iOS)
                          <br />
                          You agree, undertake and confirm that your use of
                          Platform shall be strictly governed by the following
                          binding principles:
                          <br />
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>i.</span>{" "}
                            &nbsp;You shall not host, display, upload, download,
                            modify, publish, transmit, update or share any
                            information which:
                          </p>
                          <ol>
                            <p
                              style={{ textAlign: "justify", fontSize: "15px" }}
                            >
                              {" "}
                              <span style={{ color: "#06b590" }}>a.</span>{" "}
                              &nbsp;belongs to another person and which you do
                              not have any right to;
                            </p>
                            <p
                              style={{ textAlign: "justify", fontSize: "15px" }}
                            >
                              {" "}
                              <span style={{ color: "#06b590" }}>b.</span>{" "}
                              &nbsp;is grossly harmful, harassing, blasphemous,
                              defamatory, obscene, pornographic, paedophilic,
                              libellous, slanderous, criminally inciting or
                              invasive of another's privacy, hateful, or
                              racially, ethnically objectionable, disparaging,
                              relating or encouraging money laundering or
                              gambling, or otherwise unlawful in any manner
                              whatsoever; or unlawfully threatening or
                              unlawfully harassing including but not limited to
                              "indecent representation of women" within the
                              meaning of the Indecent Representation of Women
                              (Prohibition) Act, 1986;
                            </p>
                            <p
                              style={{ textAlign: "justify", fontSize: "15px" }}
                            >
                              {" "}
                              <span style={{ color: "#06b590" }}>c.</span>{" "}
                              &nbsp;is misleading or misrepresentative in any
                              way;
                            </p>
                            <p
                              style={{ textAlign: "justify", fontSize: "15px" }}
                            >
                              {" "}
                              <span style={{ color: "#06b590" }}>d.</span>{" "}
                              &nbsp;is patently offensive to the online
                              community, such as sexually explicit content, or
                              content that promotes obscenity, paedophilia,
                              racism, bigotry, hatred or physical harm of any
                              kind against any group or individual;
                            </p>
                            <p
                              style={{ textAlign: "justify", fontSize: "15px" }}
                            >
                              {" "}
                              <span style={{ color: "#06b590" }}>e.</span>{" "}
                              &nbsp;harasses or advocates harassment of another
                              person;
                            </p>
                            <p
                              style={{ textAlign: "justify", fontSize: "15px" }}
                            >
                              {" "}
                              <span style={{ color: "#06b590" }}>f.</span>{" "}
                              &nbsp;involves the transmission of "junk mail",
                              "chain letters", or unsolicited mass mailing or
                              "spamming";
                            </p>
                            <p
                              style={{ textAlign: "justify", fontSize: "15px" }}
                            >
                              {" "}
                              <span style={{ color: "#06b590" }}>g.</span>{" "}
                              &nbsp;promotes illegal activities or conduct that
                              is abusive, threatening, obscene, defamatory or
                              libellous;
                            </p>
                            <p
                              style={{ textAlign: "justify", fontSize: "15px" }}
                            >
                              {" "}
                              <span style={{ color: "#06b590" }}>h.</span>{" "}
                              &nbsp;infringes upon or violates any third party's
                              rights [including, but not limited to,
                              intellectual property rights, rights of privacy
                              (including without limitation unauthorized
                              disclosure of a person's name, email address,
                              physical address or phone number) or rights of
                              publicity];
                            </p>
                            <p
                              style={{ textAlign: "justify", fontSize: "15px" }}
                            >
                              {" "}
                              <span style={{ color: "#06b590" }}>i.</span>{" "}
                              &nbsp;promotes an illegal or unauthorized copy of
                              another person's copyrighted work (see "copyright
                              complaint" below for instructions on how to lodge
                              a complaint about uploaded copyrighted material),
                              such as providing pirated computer programs or
                              links to them, providing information to circumvent
                              manufacture-installed copy-protect devices, or
                              providing pirated music or links to pirated music
                              files;
                            </p>
                            <p
                              style={{ textAlign: "justify", fontSize: "15px" }}
                            >
                              {" "}
                              <span style={{ color: "#06b590" }}>j.</span>{" "}
                              &nbsp;contains restricted or password-only access
                              pages, or hidden pages or images (those not linked
                              to or from another accessible page);
                            </p>
                            <p
                              style={{ textAlign: "justify", fontSize: "15px" }}
                            >
                              {" "}
                              <span style={{ color: "#06b590" }}>k.</span>{" "}
                              &nbsp;provides material that exploits people in a
                              sexual, violent or otherwise inappropriate manner
                              or solicits personal information from anyone;
                            </p>
                            <p
                              style={{ textAlign: "justify", fontSize: "15px" }}
                            >
                              {" "}
                              <span style={{ color: "#06b590" }}>l.</span>{" "}
                              &nbsp;provides instructional information about
                              illegal activities such as making or buying
                              illegal weapons, violating someone's privacy, or
                              providing or creating computer viruses;
                            </p>
                            <p
                              style={{ textAlign: "justify", fontSize: "15px" }}
                            >
                              {" "}
                              <span style={{ color: "#06b590" }}>m.</span>{" "}
                              &nbsp;contains video, photographs, or images of
                              another person (with a minor or an adult);
                            </p>
                            <p
                              style={{ textAlign: "justify", fontSize: "15px" }}
                            >
                              {" "}
                              <span style={{ color: "#06b590" }}>n.</span>{" "}
                              &nbsp;tries to gain unauthorized access or exceeds
                              the scope of authorized access to the Platform or
                              to profiles, blogs, communities, account
                              information, bulletins, friend request, or other
                              areas of the Platform or solicits passwords or
                              personal identifying information for commercial or
                              unlawful purposes from other users;
                            </p>
                            <p
                              style={{ textAlign: "justify", fontSize: "15px" }}
                            >
                              {" "}
                              <span style={{ color: "#06b590" }}>o.</span>{" "}
                              &nbsp;engages in commercial activities and/or
                              sales without our prior written consent such as
                              contests, sweepstakes, barter, advertising and
                              pyramid schemes, or the buying or selling of
                              products related to the Platform. Throughout these
                              Terms of Use, MothersFood's prior written consent
                              means a communication coming from MothersFood's
                              Legal Department, specifically in response to your
                              request, and expressly addressing and allowing the
                              activity or conduct for which you seek
                              authorization;
                            </p>
                            <p
                              style={{ textAlign: "justify", fontSize: "15px" }}
                            >
                              {" "}
                              <span style={{ color: "#06b590" }}>p.</span>{" "}
                              &nbsp;solicits gambling or engages in any gambling
                              activity which is or could be construed as being
                              illegal;
                            </p>
                            <p
                              style={{ textAlign: "justify", fontSize: "15px" }}
                            >
                              {" "}
                              <span style={{ color: "#06b590" }}>q.</span>{" "}
                              &nbsp;interferes with another user's use and
                              enjoyment of the Platform or any third party's
                              user and enjoyment of similar services;
                            </p>
                            <p
                              style={{ textAlign: "justify", fontSize: "15px" }}
                            >
                              {" "}
                              <span style={{ color: "#06b590" }}>r.</span>{" "}
                              &nbsp;refers to any website or URL that, in our
                              sole discretion, contains material that is
                              inappropriate for the Platform or any other
                              website, contains content that would be prohibited
                              or violates the letter or spirit of these Terms of
                              Use;
                            </p>
                            <p
                              style={{ textAlign: "justify", fontSize: "15px" }}
                            >
                              {" "}
                              <span style={{ color: "#06b590" }}>s.</span>{" "}
                              &nbsp;harm minors in any way;
                            </p>
                            <p
                              style={{ textAlign: "justify", fontSize: "15px" }}
                            >
                              {" "}
                              <span style={{ color: "#06b590" }}>t.</span>{" "}
                              &nbsp;infringes any patent, trademark, copyright
                              or other intellectual property rights or third
                              party's trade secrets or rights of publicity or
                              privacy or shall not be fraudulent or involve the
                              sale of counterfeit or stolen products;
                            </p>
                            <p
                              style={{ textAlign: "justify", fontSize: "15px" }}
                            >
                              {" "}
                              <span style={{ color: "#06b590" }}>u.</span>{" "}
                              &nbsp;violates any law for the time being in
                              force;
                            </p>
                            <p
                              style={{ textAlign: "justify", fontSize: "15px" }}
                            >
                              {" "}
                              <span style={{ color: "#06b590" }}>v.</span>{" "}
                              &nbsp;deceives or misleads the addressee/users
                              about the origin of such messages or communicates
                              any information which is grossly offensive or
                              menacing in nature;
                            </p>
                            <p
                              style={{ textAlign: "justify", fontSize: "15px" }}
                            >
                              {" "}
                              <span style={{ color: "#06b590" }}>w.</span>{" "}
                              &nbsp;impersonate another person;
                            </p>
                            <p
                              style={{ textAlign: "justify", fontSize: "15px" }}
                            >
                              {" "}
                              <span style={{ color: "#06b590" }}>x.</span>{" "}
                              &nbsp;contains software viruses or any other
                              computer code, files or programs designed to
                              interrupt, destroy or limit the functionality of
                              any computer resource; or contains any trojan
                              horses, worms, time bombs, cancelbots, easter eggs
                              or other computer programming routines that may
                              damage, detrimentally interfere with, diminish
                              value of, surreptitiously intercept or expropriate
                              any system, data or personal information;contains
                              software viruses or any other computer code, files
                              or programs designed to interrupt, destroy or
                              limit the functionality of any computer resource;
                              or contains any trojan horses, worms, time bombs,
                              cancelbots, easter eggs or other computer
                              programming routines that may damage,
                              detrimentally interfere with, diminish value of,
                              surreptitiously intercept or expropriate any
                              system, data or personal information;
                            </p>
                            <p
                              style={{ textAlign: "justify", fontSize: "15px" }}
                            >
                              {" "}
                              <span style={{ color: "#06b590" }}>y.</span>{" "}
                              &nbsp;threatens the unity, integrity, defence,
                              security or sovereignty of India, friendly
                              relations with foreign states, or public order or
                              causes incitement to the commission of any
                              criminal offence or prevents investigation of any
                              offence or is insulting any other nation;
                            </p>
                            <p
                              style={{ textAlign: "justify", fontSize: "15px" }}
                            >
                              {" "}
                              <span style={{ color: "#06b590" }}>z.</span>{" "}
                              &nbsp;is false, inaccurate or misleading;
                            </p>
                            <p
                              style={{ textAlign: "justify", fontSize: "15px" }}
                            >
                              {" "}
                              <span style={{ color: "#06b590" }}>aa.</span>{" "}
                              &nbsp;directly or indirectly, offers, attempts to
                              offer, trades or attempts to trade in any item,
                              the dealing of which is prohibited or restricted
                              in any manner under the provisions of any
                              applicable law, rule, regulation or guideline for
                              the time being in force; or
                            </p>
                            <p
                              style={{ textAlign: "justify", fontSize: "15px" }}
                            >
                              {" "}
                              <span style={{ color: "#06b590" }}>bb.</span>{" "}
                              &nbsp;creates liability for us or causes us to
                              lose (in whole or in part) the services of our
                              internet service provider or other suppliers.
                            </p>
                          </ol>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>ii.</span>{" "}
                            &nbsp;You shall not use any "deep-link",
                            "page-scrape", "robot", "spider" or other automatic
                            device, program, algorithm or methodology, or any
                            similar or equivalent manual process, to access,
                            acquire, copy or monitor any portion of the Platform
                            or any Content, or in any way reproduce or
                            circumvent the navigational structure or
                            presentation of the Platform or any Content, to
                            obtain or attempt to obtain any materials, documents
                            or information through any means not purposely made
                            available through the Platform. We reserve our right
                            to prohibit any such activity.
                          </p>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>iii.</span>{" "}
                            &nbsp;You shall not attempt to gain unauthorized
                            access to any portion or feature of the Platform, or
                            any other systems or networks connected to the
                            Platform or to any server, computer, network, or to
                            any of the services offered on or through the
                            Platform, by hacking, "password mining" or any other
                            illegitimate means.
                          </p>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>iv.</span>{" "}
                            &nbsp;You shall not probe, scan or test the
                            vulnerability of the Platform or any network
                            connected to the Platform nor breach the security or
                            authentication measures on the Platform or any
                            network connected to the Platform. You may not
                            reverse look-up, trace or seek to trace any
                            information on any other user of or visitor to
                            Platform, or any other Buyer, including any account
                            on the Platform not owned by you, to its source, or
                            exploit the Platform or any service or information
                            made available or offered by or through the
                            Platform, in any way where the purpose is to reveal
                            any information, including but not limited to
                            personal identification or information, other than
                            your own information, as provided for by the
                            Platform.
                          </p>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>v.</span>{" "}
                            &nbsp;You shall not make any negative, denigrating
                            or defamatory statement(s) or comment(s) about us or
                            the brand name or domain name used by us including
                            the name 'MothersFood', or otherwise engage in any
                            conduct or action that might tarnish the image or
                            reputation, of MothersFood or Merchant on platform
                            or otherwise tarnish or dilute any MothersFood’
                            trade or service marks, trade name and/or goodwill
                            associated with such trade or service marks, as may
                            be owned or used by us. You agree that you will not
                            take any action that imposes an unreasonable or
                            disproportionately large load on the infrastructure
                            of the Platform or MothersFood’ systems or networks,
                            or any systems or networks connected to MothersFood.
                          </p>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>vi.</span>{" "}
                            &nbsp;You agree not to use any device, software or
                            routine to interfere or attempt to interfere with
                            the proper working of the Platform or any
                            transaction being conducted on the Platform, or with
                            any other person's use of the Platform.
                          </p>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>vii.</span>{" "}
                            &nbsp;You may not forge headers or otherwise
                            manipulate identifiers in order to disguise the
                            origin of any message or transmittal you send to us
                            on or through the Platform or any service offered on
                            or through the Platform. You may not pretend that
                            you are, or that you represent, someone else, or
                            impersonate any other individual or entity.
                          </p>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>viii.</span>{" "}
                            &nbsp;You may not use the Platform or any content on
                            the Platform for any purpose that is unlawful or
                            prohibited by these Terms of Use, or to solicit the
                            performance of any illegal activity or other
                            activity that infringes the rights of MothersFood
                            and/or others.
                          </p>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>ix.</span>{" "}
                            &nbsp;You shall at all times ensure full compliance
                            with the applicable provisions, as amended from time
                            to time, of (a) the Information Technology Act, 2000
                            and the rules thereunder; (b) all applicable
                            domestic laws, rules and regulations (including the
                            provisions of any applicable exchange control laws
                            or regulations in force); and (c) international
                            laws, foreign exchange laws, statutes, ordinances
                            and regulations (including, but not limited to sales
                            tax/VAT, income tax, octroi, service tax, central
                            excise, custom duty, local levies) regarding your
                            use of our service and your listing, purchase,
                            solicitation of offers to purchase, and sale of
                            products or services. You shall not engage in any
                            transaction in an item or service, which is
                            prohibited by the provisions of any applicable law
                            including exchange control laws or regulations for
                            the time being in force.
                          </p>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>x.</span>{" "}
                            &nbsp;In order to allow us to use the information
                            supplied by you, without violating your rights or
                            any laws, you agree to grant us a non-exclusive,
                            worldwide, perpetual, irrevocable, royalty-free,
                            sub-licensable (through multiple tiers) right to
                            exercise the copyright, publicity, database rights
                            or any other rights you have in your Information, in
                            any media now known or not currently known, with
                            respect to your Information. We will only use your
                            information in accordance with these Terms of Use
                            and Privacy Policy applicable to use of the
                            Platform.
                          </p>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>xi.</span>{" "}
                            &nbsp;From time to time, you shall be responsible
                            for providing information relating to the products
                            or services proposed to be sold by you. In this
                            connection, you undertake that all such information
                            shall be accurate in all respects. You shall not
                            exaggerate or overemphasize the attributes of such
                            products or services so as to mislead other users in
                            any manner.
                          </p>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>xii.</span>{" "}
                            &nbsp;You shall not engage in advertising to, or
                            solicitation of, other users of the Platform to buy
                            or sell any products or services, including, but not
                            limited to, products or services related to that
                            being displayed on the Platform or related to us.
                            You may not transmit any chain letters or
                            unsolicited commercial or junk email to other users
                            via the Platform. It shall be a violation of these
                            Terms of Use to use any information obtained from
                            the Platform in order to harass, abuse, or harm
                            another person, or in order to contact, advertise
                            to, solicit, or sell to another person other than us
                            without our prior explicit consent. In order to
                            protect our users from such advertising or
                            solicitation, we reserve the right to restrict the
                            number of messages or emails which a user may send
                            to other users in any 24-hour period which we deem
                            appropriate in its sole discretion. You understand
                            that we have the right at all times to disclose any
                            information (including the identity of the persons
                            providing information or materials on the Platform)
                            as necessary to satisfy any law, regulation or valid
                            governmental request. This may include, without
                            limitation, disclosure of the information in
                            connection with investigation of alleged illegal
                            activity or solicitation of illegal activity or in
                            response to a lawful court order or subpoena. In
                            addition, We can (and you hereby expressly authorize
                            us to) disclose any information about you to law
                            enforcement or other government officials, as we, in
                            our sole discretion, believe necessary or
                            appropriate in connection with the investigation
                            and/or resolution of possible crimes, especially
                            those that may involve personal injury.
                          </p>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>xiii.</span>{" "}
                            &nbsp;We reserve the right, but has no obligation,
                            to monitor the materials posted on the Platform.
                            MothersFood shall have the right to remove or edit
                            any content that in its sole discretion violates, or
                            is alleged to violate, any applicable law or either
                            the spirit or letter of these Terms of Use.
                            Notwithstanding this right, YOU REMAIN SOLELY
                            RESPONSIBLE FOR THE CONTENT OF THE MATERIALS YOU
                            POST ON THE PLATFORM AND IN YOUR PRIVATE MESSAGES.
                            Please be advised that such Content posted does not
                            necessarily reflect MothersFood views. In no event
                            shall MothersFood assume or have any responsibility
                            or liability for any Content posted or for any
                            claims, damages or losses resulting from use of
                            Content and/or appearance of Content on the
                            Platform. You hereby represent and warrant that you
                            have all necessary rights in and to all Content
                            which you provide and all information it contains
                            and that such Content shall not infringe any
                            proprietary or other rights of third parties or
                            contain any libellous, tortious, or otherwise
                            unlawful information.
                          </p>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>xiv.</span>{" "}
                            &nbsp;Your correspondence or business dealings with,
                            or participation in promotions of, advertisers found
                            on or through the Platform, including payment and
                            delivery of related products or services, and any
                            other terms, conditions, warranties or
                            representations associated with such dealings, are
                            solely between you and such advertiser. We shall not
                            be responsible or liable for any loss or damage of
                            any sort incurred as the result of any such dealings
                            or as the result of the presence of such advertisers
                            on the Platform.
                          </p>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>xv.</span>{" "}
                            &nbsp;It is possible that other users (including
                            unauthorized users or 'hackers') may post or
                            transmit offensive or obscene materials on the
                            Platform and that you may be involuntarily exposed
                            to such offensive and obscene materials. It also is
                            possible for others to obtain personal information
                            about you due to your use of the Platform, and that
                            the recipient may use such information to harass or
                            injure you. We do not approve of such unauthorized
                            uses, but by using the Platform You acknowledge and
                            agree that we are not responsible for the use of any
                            personal information that you publicly disclose or
                            share with others on the Platform. Please carefully
                            select the type of information that you publicly
                            disclose or share with others on the Platform.
                          </p>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>xvi.</span>{" "}
                            &nbsp;MothersFood shall have all the rights to take
                            necessary action and claim damages that may occur
                            due to your involvement/participation in any way on
                            your own or through group/s of people, intentionally
                            or unintentionally in DoS/DDoS (Distributed Denial
                            of Services), hacking, pen testing attempts without
                            our prior consent or a mutual legal agreement.
                          </p>
                        </li>
                      </ol>
                    </li>

                    <li
                      style={{ textAlign: "justify", fontSize: "15px" }}
                      className="numbers-roman"
                    >
                      <h6 style={{ textAlign: "justify", fontSize: "15px" }}>
                        <b>Account Registration or use of the Platform</b>
                      </h6>
                      <ol className="number-list number--list1">
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          You may access the Platform by registering to create
                          an account (" MothersFood Account") and become a
                          member (" Membership"); or (c) you can also register
                          to join by logging into your account with certain
                          third party social networking sites (" SNS")
                          (including, but not limited to, Facebook); each such
                          account, a " Third Party Account", via our Platform,
                          as described below. The Membership is limited for the
                          purpose and are subject to the terms, and strictly not
                          transferable. As part of the functionality of the
                          Platform services, you may link your MothersFood
                          Account with Third Party Accounts, by either:
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>i.</span>{" "}
                            &nbsp;providing your Third Party Account login
                            information to us through the Platform; or
                          </p>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>ii.</span>{" "}
                            &nbsp;allowing us to access your Third-Party
                            Account, as is permitted under the applicable terms
                            and conditions that govern your use of each Third
                            Party Account.
                          </p>
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          You represent that you are entitled to disclose your
                          Third Party Account login information to us and/or
                          grant us access to your Third Party Account
                          (including, but not limited to, for use for the
                          purposes described herein), without breach by you of
                          any of the terms and conditions that govern your use
                          of the applicable Third Party Account and without
                          obligating us to pay any fees or making us subject to
                          any usage limitations imposed by such third party
                          service providers.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          By granting us access to any Third Party Accounts, you
                          understand that we will access, make available and
                          store (if applicable) any content or information that
                          you have provided to and stored in your Third Party
                          Account (" SNS Content") so that it is available on
                          and through the Platform via your MothersFood Account.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          Unless otherwise specified in these Terms of Use, all
                          SNS Content, if any, will be considered to be your
                          content for all purposes of these Terms of Use.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          Depending on the Third Party Accounts, you choose, and
                          subject to the privacy settings that you have set in
                          such Third Party Accounts, personally identifiable
                          information that you post to your Third Party Accounts
                          will be available on and through your MothersFood
                          Account on the Platform.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          Please note that if a Third Party Account or
                          associated service becomes unavailable or our access
                          to such Third Party Account is terminated by the third
                          party service provider, then SNS Content will no
                          longer be available on and through the Platform.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          We will create your MothersFood Account for your use
                          of the Platform services based upon the personal
                          information you provide to us or that we obtain via an
                          SNS, as described above. You may only have one
                          MothersFood Account and not permitted to create
                          multiple accounts. If found, you having multiple
                          accounts, MothersFood reserves right to suspend such
                          multiple account without being liable for any
                          compensation.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          You agree to provide accurate, current and complete
                          information during the registration process and to
                          update such information to keep it accurate, current
                          and complete.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          We reserve the right to suspend or terminate your
                          MothersFood Account and your access to the Services
                          (i) if any information provided during the
                          registration process or thereafter proves to be
                          inaccurate, not current or incomplete; (ii) if it is
                          believed that your actions may cause legal liability
                          for you, other users or us; and/or (iii) if you are
                          found to be non- compliant with the Terms of Use.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          You are responsible for safeguarding your password.
                          You agree that you will not disclose your password to
                          any third party and that you will take sole
                          responsibility for any activities or actions under
                          your MothersFood Account, whether or not you have
                          authorized such activities or actions. You will
                          immediately notify us of any unauthorized use of your
                          MothersFood Account.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          Goods and services purchased from the Platform are
                          intended for your personal use and you represent that
                          the same are not for resale or you are not acting as
                          an agent for other parties.
                        </li>
                      </ol>
                    </li>
                    <li
                      style={{ textAlign: "justify", fontSize: "15px" }}
                      className="numbers-roman"
                    >
                      <h6 style={{ textAlign: "justify", fontSize: "15px" }}>
                        <b>Bookings and Financial Terms</b>
                      </h6>
                      <ol className="number-list number--list1">
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          The Platform allows you to place food order bookings
                          and we will, subject to the terms and conditions set
                          out herein, enable delivery of such order to you.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          MothersFood do not own, sell, resell on its own and/or
                          do not control the Merchants or the related services
                          provided in connection thereof. You understand that
                          any order that you place shall be subject to the terms
                          and conditions set out in these Terms of Use
                          including, but not limited to, product availability
                          and delivery location serviceability.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          As a general rule, all food orders placed on the
                          Platform are treated as confirmed.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          However, upon your successful completion of booking an
                          order, we may call you on the telephone or mobile
                          number provided to confirm the details of the order,
                          the price to be paid and the estimated delivery time.
                          For this purpose, you will be required to share
                          certain information with us, including but not limited
                          to (i) your first and last name (ii) mobile number;
                          and (iii) email address. It shall be your sole
                          responsibility to bring any incorrect details to our
                          attention.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          In addition to the foregoing, we may also contact you
                          by phone and / or email to inform and confirm any
                          change in the order, due to availability or
                          unavailability or change in price of the order as
                          informed by the Merchant. Please note change or
                          confirmation of the order shall be treated as final.
                          It is clarified that MothersFood reserves the right to
                          not to process your order in the event you are
                          unavailable on the phone at the time we call you for
                          confirming the order and such event the provisions of
                          the cancellation and refund policy below shall be
                          applicable.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          All payments made against the purchases/services on
                          the Platform by you shall be compulsorily in Indian
                          Rupees acceptable in the Republic of India. The
                          Platform will not facilitate transactions with respect
                          to any other form of currency with respect to the
                          purchases made on Platform. You can pay by (i) credit
                          card or debit card or net banking; (ii) any other RBI
                          approved payment method at the time of booking an
                          order; or (iii) credit or debit card or cash at the
                          time of delivery. You understand, accept and agree
                          that the payment facility provided by MothersFood is
                          neither a banking nor financial service but is merely
                          a facilitator providing an electronic, automated
                          online electronic payment, receiving payment on
                          delivery, collection and remittance facility for the
                          transactions on the Platform using the existing
                          authorized banking infrastructure and credit card
                          payment gateway networks. Further, by providing
                          payment facility, MothersFood is neither acting as
                          trustees nor acting in a fiduciary capacity with
                          respect to the transaction or the transaction price.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          You acknowledge and agree that we act as the
                          Merchant's payment agent for the limited purpose of
                          accepting payments from you on behalf of the Merchant.
                          Upon your payment of amounts to us, which are due to
                          the Merchant, your payment obligation to the Merchant
                          for such amounts is completed, and we are responsible
                          for remitting such amounts, to the Merchant. You shall
                          not, under any circumstances whatsoever, make any
                          payment directly to the Merchant for Order bookings
                          made using the Platform.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          You agree to pay us for the total amount for the order
                          placed by you on the Platform. We will collect the
                          total amount in accordance with the terms and
                          conditions of these Terms of Use and the pricing terms
                          set forth in the applicable menu listing for the
                          particular Merchant. Please note that we cannot
                          control any amount that may be charged to you by your
                          bank related to our collection of the total amount,
                          and we disclaim all liability in this regard.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          In connection with your order, you will be asked to
                          provide customary billing information such as name,
                          billing address and credit card information either to
                          us or our third party payment processor. You agree to
                          pay us for the order placed by you on the Platform, in
                          accordance with these Terms, using of the methods
                          described under clause VII (6) above. You hereby
                          authorize the collection of such amounts by charging
                          the credit card provided as part of requesting the
                          booking, either directly by us or indirectly, via a
                          third party online payment processor or by one of the
                          payment methods described on the Platform. If you are
                          directed to our third-party payment processor, you may
                          be subject to terms and conditions governing use of
                          that third party's service and that third party's
                          personal information collection practices. Please
                          review such terms and conditions and privacy policy
                          before using the Platform services. Once your
                          confirmed booking transaction is complete you will
                          receive a confirmation email summarizing your
                          confirmed booking.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          The final tax bill will be issued by the Merchant to
                          the Buyer along with the order and MothersFood is
                          merely collecting the payment on behalf of such
                          Merchant. All applicable taxes and levies, the rates
                          thereof and the manner of applicability of such taxes
                          on the bill are being charged and determined by the
                          Merchant. MothersFood holds no responsibility for the
                          legal correctness/validity of the levy of such taxes.
                          The sole responsibility for any legal issue arising on
                          the taxes shall reside with the Merchant.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          The prices reflected on the Platform, including
                          packaging or handling charges, are determined solely
                          by the Merchant and are listed based on Merchant's
                          information. Very rarely, prices may change at the
                          time of placing order due to Merchant changing the
                          menu price without due intimation and such change of
                          price are at the sole discretion of the Merchant
                          attributing to various factors beyond control.
                          <br />
                          Disclaimer: Prices on any product(s) as is reflected
                          on the Platform may due to some technical issue,
                          typographical error or product information supplied by
                          Merchant be incorrectly reflected and in such an event
                          Merchant may cancel such your order(s).
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          The Merchant shall be solely responsible for any
                          warrantee/guarantee of the food products sold to the
                          Buyers and in no event shall be the responsibility of
                          MothersFood.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          The transaction is bilateral between the Merchant and
                          Buyer and therefore, MothersFood is not liable to
                          charge or deposit any taxes applicable on such
                          transaction.
                        </li>
                      </ol>
                    </li>
                    <li
                      style={{ textAlign: "justify", fontSize: "15px" }}
                      className="numbers-roman"
                    >
                      <h6 style={{ textAlign: "justify", fontSize: "15px" }}>
                        <b>Account Registration or use of the Platform</b>
                      </h6>
                      <ol className="number-list number--list1">
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          You may access the Platform by registering to create
                          an account (" MothersFood Account") and become a
                          member (" Membership"); or (c) you can also register
                          to join by logging into your account with certain
                          third party social networking sites (" SNS")
                          (including, but not limited to, Facebook); each such
                          account, a " Third Party Account", via our Platform,
                          as described below. The Membership is limited for the
                          purpose and are subject to the terms, and strictly not
                          transferable. As part of the functionality of the
                          Platform services, you may link your MothersFood
                          Account with Third Party Accounts, by either:
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>i.</span>{" "}
                            &nbsp;providing your Third Party Account login
                            information to us through the Platform; or
                          </p>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>ii.</span>{" "}
                            &nbsp;allowing us to access your Third-Party
                            Account, as is permitted under the applicable terms
                            and conditions that govern your use of each Third
                            Party Account.
                          </p>
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          You represent that you are entitled to disclose your
                          Third Party Account login information to us and/or
                          grant us access to your Third Party Account
                          (including, but not limited to, for use for the
                          purposes described herein), without breach by you of
                          any of the terms and conditions that govern your use
                          of the applicable Third Party Account and without
                          obligating us to pay any fees or making us subject to
                          any usage limitations imposed by such third party
                          service providers.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          By granting us access to any Third Party Accounts, you
                          understand that we will access, make available and
                          store (if applicable) any content or information that
                          you have provided to and stored in your Third Party
                          Account (" SNS Content") so that it is available on
                          and through the Platform via your MothersFood Account.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          Unless otherwise specified in these Terms of Use, all
                          SNS Content, if any, will be considered to be your
                          content for all purposes of these Terms of Use.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          Depending on the Third Party Accounts, you choose, and
                          subject to the privacy settings that you have set in
                          such Third Party Accounts, personally identifiable
                          information that you post to your Third Party Accounts
                          will be available on and through your MothersFood
                          Account on the Platform.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          Please note that if a Third Party Account or
                          associated service becomes unavailable or our access
                          to such Third Party Account is terminated by the third
                          party service provider, then SNS Content will no
                          longer be available on and through the Platform.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          We will create your MothersFood Account for your use
                          of the Platform services based upon the personal
                          information you provide to us or that we obtain via an
                          SNS, as described above. You may only have one
                          MothersFood Account and not permitted to create
                          multiple accounts. If found, you having multiple
                          accounts, MothersFood reserves right to suspend such
                          multiple account without being liable for any
                          compensation.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          You agree to provide accurate, current and complete
                          information during the registration process and to
                          update such information to keep it accurate, current
                          and complete.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          We reserve the right to suspend or terminate your
                          MothersFood Account and your access to the Services
                          (i) if any information provided during the
                          registration process or thereafter proves to be
                          inaccurate, not current or incomplete; (ii) if it is
                          believed that your actions may cause legal liability
                          for you, other users or us; and/or (iii) if you are
                          found to be non- compliant with the Terms of Use.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          You are responsible for safeguarding your password.
                          You agree that you will not disclose your password to
                          any third party and that you will take sole
                          responsibility for any activities or actions under
                          your MothersFood Account, whether or not you have
                          authorized such activities or actions. You will
                          immediately notify us of any unauthorized use of your
                          MothersFood Account.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          Goods and services purchased from the Platform are
                          intended for your personal use and you represent that
                          the same are not for resale or you are not acting as
                          an agent for other parties.
                        </li>
                      </ol>
                    </li>
                    <li
                      style={{ textAlign: "justify", fontSize: "15px" }}
                      className="numbers-roman"
                    >
                      <h6 style={{ textAlign: "justify", fontSize: "15px" }}>
                        <b>Cancellations and Refunds</b>
                      </h6>
                      <ol className="number-list number--list1">
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          Cancellation
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>i.</span>{" "}
                            &nbsp;As a general rule you shall not be entitled to
                            cancel your order once you have received
                            confirmation of the same. If you cancel your order
                            after it has been confirmed, MothersFood shall have
                            a right to charge you cancellation fee of a minimum
                            INR 75 upto the order value (inclusive of applicable
                            taxes), with a right to either not to refund the
                            order value or recover from your subsequent order,
                            the complete/ deficit cancellation fee, as
                            applicable, to compensate our Home-Chef and Delivery
                            Partners. MothersFood shall also have right to
                            charge you cancellation fee for the orders cancelled
                            by MothersFood for the reasons specified under
                            clause 1(iii) of this cancellation and refunds
                            policy. In case of cancellations for the reasons
                            attributable to MothersFood or its Home-Chef and
                            Delivery Partners, MothersFood shall not charge you
                            any cancellation fee.
                          </p>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>ii.</span>{" "}
                            &nbsp;However, in the unlikely event of an item on
                            your order being unavailable, we will contact you on
                            the phone number provided to us at the time of
                            placing the order and inform you of such
                            unavailability. In such an event you will be
                            entitled to cancel the entire order and shall be
                            entitled to a refund in accordance with our refund
                            policy.
                          </p>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>ii.</span>{" "}
                            &nbsp;We reserve the sole right to cancel your order
                            in the following circumstance:
                          </p>
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          Refunds
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>i.</span>{" "}
                            &nbsp;You shall be entitled to a refund only if you
                            pre-pay for your order at the time of placing your
                            order on the Platform and only in the event of any
                            of the following circumstances:
                          </p>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>ii.</span>{" "}
                            &nbsp;Our decision on refunds shall be at our sole
                            discretion and shall be final and binding.
                          </p>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>ii.</span>{" "}
                            &nbsp;All refund amounts shall be credited to your
                            account within 3-4 business days in accordance with
                            the terms that may be stipulated by the bank which
                            has issued the credit / debit card.
                          </p>
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          In case of payment at the time of delivery, you will
                          not be required to pay for:
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>i.</span>{" "}
                            &nbsp;orders where the packaging has been tampered
                            or damaged by us;
                          </p>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>ii.</span>{" "}
                            &nbsp;wrong order being delivered; or
                          </p>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>ii.</span>{" "}
                            &nbsp;items missing from your order at the time of
                            delivery.
                          </p>
                        </li>
                      </ol>
                    </li>
                    <li
                      style={{ textAlign: "justify", fontSize: "15px" }}
                      className="numbers-roman"
                    >
                      <h6 style={{ textAlign: "justify", fontSize: "15px" }}>
                        <b>Terms of service</b>
                      </h6>
                      <ol className="number-list number--list1">
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          You agree and acknowledge that we shall not be
                          responsible for:
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>i.</span>{" "}
                            &nbsp;The services or goods provided by the Merchant
                            including, but not limited, serving of food orders
                            suiting your requirements and needs;
                          </p>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>ii.</span>{" "}
                            &nbsp;The Merchant's services or goods not being up
                            to your expectations or leading to any loss, harm or
                            damage to you;
                          </p>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>iii.</span>{" "}
                            &nbsp;The availability or unavailability of certain
                            items on the menu; or
                          </p>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>iv.</span>{" "}
                            &nbsp;The Merchant serving the incorrect orders.
                          </p>
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          The details of the menu and price list available on
                          the Platform are based on the information provided by
                          the Merchants and we shall not be responsible for any
                          change or cancellation or unavailability.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          You may not be able to avail our Services if your
                          delivery location is outside our current scope of
                          Service. We will keep you informed of the same at the
                          time of confirming your order booking.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          You understand that delivery periods quoted to you at
                          the time of confirming the order is an approximate
                          estimate and may vary. We will not be responsible for
                          any delay in the delivery of your order.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          You order will be only delivered to the address
                          designated by you at the time of placing the order on
                          the Platform. We reserve the right to cancel the
                          order, in our sole discretion, in the event of any
                          change to the place of delivery and you shall not be
                          entitled to any refund for the same. Delivery in the
                          event of change of the delivery location shall be at
                          our sole discretion.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          You shall undertake to provide adequate directions,
                          information and authorisations to accept delivery. In
                          the event of any failure to accept delivery, failure
                          to deliver within the estimated time due to your
                          failure to provide appropriate instructions, or
                          authorizations, then such goods shall be deemed to
                          have been delivered to you and all risk and
                          responsibility in relation to such goods shall pass to
                          you and you shall not be entitled to any refund for
                          the same. Our decision in relation to this shall be
                          final and binding.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          You understand that our liability ends once your order
                          has been delivered to you.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          Services provided:
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>i.</span>{" "}
                            &nbsp;You confirm that we shall not be responsible
                            for any deficiency in payment of consideration
                            payable towards the goods purchased from the
                            Services.
                          </p>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>ii.</span>{" "}
                            &nbsp;Each purchase on the Service shall contain
                            necessary instructions to redeem the Services. The
                            terms of the Services shall be governed by these
                            Terms of Use and any other terms as set out in such
                            document confirm such sale of Service. You shall not
                            be entitled to receive any credit, refund or cash
                            back for the value of the goods sold if you fail to
                            redeem the goods within the expiry date or in
                            accordance with the terms therein.
                          </p>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>iii.</span>{" "}
                            &nbsp;You agree and acknowledge that neither us nor
                            the Merchant shall be liable in the event of you
                            failing to adhere to the Terms of Use.
                          </p>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>iv.</span>{" "}
                            &nbsp;You might be required to provide your credit
                            or debit card details to the approved payment
                            gateways while making the payment. In this regard,
                            you agree to provide correct and accurate credit/
                            debit card details to the approved payment gateways
                            for availing the Services. You shall not use the
                            credit/ debit card which is not lawfully owned by
                            you, i.e. in any transaction, you must use your own
                            credit/ debit card. The information provided by you
                            will not be utilized or shared with any third party
                            unless required in relation to fraud verifications
                            or by law, regulation or court order. You will be
                            solely responsible for the security and
                            confidentiality of your credit/ debit card details.
                            We expressly disclaim all liabilities that may arise
                            as a consequence of any unauthorized use of your
                            credit/ debit card.
                          </p>
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          We do not offer any refunds against goods already
                          purchased from the Platform unless an error that is
                          directly attributable to us has occurred during the
                          purchase of such product or services.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          We constantly strive to provide you with accurate
                          information on the Platform. However, in the event of
                          an error, we may, in our sole discretion, contact you
                          with further instructions.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          If you use the Platform, you do the same at your own
                          risk.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          You agree that the Services shall be provided by us
                          only during the working hours of the relevant
                          Merchants.
                        </li>
                      </ol>
                    </li>
                    <li
                      style={{ textAlign: "justify", fontSize: "15px" }}
                      className="numbers-roman"
                    >
                      <h6 style={{ textAlign: "justify", fontSize: "15px" }}>
                        <b>No Endorsement</b>
                      </h6>
                      <ol className="number-list number--list1">
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          We do not endorse any Merchant. In addition, although
                          these Terms of Use require you to provide accurate
                          information, we do not attempt to confirm, and do not
                          confirm if it is purported identity. We will not be
                          responsible for any damage or harm resulting from your
                          interactions with other Members.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          By using the Services, you agree that any legal remedy
                          or liability that you seek to obtain for actions or
                          omissions of other Members or other third parties will
                          be limited to a claim against the particular Members
                          or other third parties who caused you harm and you
                          agree not to attempt to impose liability on, or seek
                          any legal remedy from us with respect to such actions
                          or omissions.
                        </li>
                      </ol>
                    </li>
                    <li
                      style={{ textAlign: "justify", fontSize: "15px" }}
                      className="numbers-roman"
                    >
                      <h6 style={{ textAlign: "justify", fontSize: "15px" }}>
                        <b>General terms of use</b>
                      </h6>
                      <ol className="number-list number--list1">
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          Persons who are "incompetent to contract" within the
                          meaning of the Indian Contract Act, 1872 including
                          minors, un-discharged insolvents etc. are not eligible
                          to use the Platform. Only individuals who are 18 years
                          of age or older may use the Platform and avail
                          Services. If you are under 18 years of age and you
                          wish to download, install, access or use the Platform,
                          your parents or legal guardian must acknowledge and
                          agree to the Terms of Use and Privacy Policy. Should
                          your parents or legal guardian fail to agree or
                          acknowledge the Terms of Use and MothersFood policies,
                          you shall immediately discontinue its use. MothersFood
                          reserves the right to terminate your Membership and /
                          or deny access to the platform if it is brought
                          MothersFood's notice that you are under the age of 18
                          years.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          If you choose to use the Platform, it shall be your
                          responsibility to treat your user identification code,
                          password and any other piece of information that we
                          may provide, as part of our security procedures, as
                          confidential and not disclose the same to any person
                          or entity other than us. We shall at times and at our
                          sole discretion reserve the right to disable any user
                          identification code or password if you have failed to
                          comply with any of the provisions of these Terms of
                          Use.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          As we are providing services in the select cities in
                          India, we have complied with applicable laws of India
                          in making the Platform and its content available to
                          you. In the event the Platform is accessed from
                          outside India or outside our delivery zones, it shall
                          be entirely at your risk. We make no representation
                          that the Platform and its contents are available or
                          otherwise suitable for use outside select cities. If
                          you choose to access or use the Platform from or in
                          locations outside select cities, you do so on your own
                          and shall be responsible for the consequences and
                          ensuring compliance of applicable laws, regulations,
                          byelaws, licenses, registrations, permits,
                          authorisations, rules and guidelines.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          You shall at all times be responsible for the use of
                          the Services through your computer or mobile device
                          and for bringing these Terms of Use and MothersFood
                          policies to the attention of all such persons
                          accessing the Platform on your computer or mobile
                          device.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          You understand and agree that the use of the Services
                          does not include the provision of a computer or mobile
                          device or other necessary equipment to access it. You
                          also understand and acknowledge that the use of the
                          Platform requires internet connectivity and
                          telecommunication links. You shall bear the costs
                          incurred to access and use the Platform and avail the
                          Services, and we shall not, under any circumstances
                          whatsoever, be responsible or liable for such costs.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          You agree and grant permission to MothersFood to
                          receive promotional SMS and e-mails from MothersFood
                          or allied partners. In case you wish to opt out of
                          receiving promotional SMS or email please send a mail
                          to support@MothersFood.in.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          By using the Platform you represent and warrant that:
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>i.</span>{" "}
                            &nbsp;All registration information you submit is
                            truthful, lawful and accurate and that you agree to
                            maintain the accuracy of such information.
                          </p>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>ii.</span>{" "}
                            &nbsp;Your use of the Platform shall be solely for
                            your personal use and you shall not authorize others
                            to use your account, including your profile or email
                            address and that you are solely responsible for all
                            content published or displayed through your account,
                            including any email messages, and your interactions
                            with other users and you shall abide by all
                            applicable local, state, national and foreign laws,
                            treaties and regulations, including those related to
                            data privacy, international communications and the
                            transmission of technical or personal data.
                          </p>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>iii.</span>{" "}
                            &nbsp;You will not submit, post, upload, distribute,
                            or otherwise make available or transmit any content
                            that: (a) is defamatory, abusive, harassing,
                            insulting, threatening, or that could be deemed to
                            be stalking or constitute an invasion of a right of
                            privacy of another person; (b) is bigoted, hateful,
                            or racially or otherwise offensive; (c) is violent,
                            vulgar, obscene, pornographic or otherwise sexually
                            explicit; (d) is illegal or encourages or advocates
                            illegal activity or the discussion of illegal
                            activities with the intent to commit them.
                          </p>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>iv.</span>{" "}
                            &nbsp;All necessary licenses, consents, permissions
                            and rights are owned by you and there is no need for
                            any payment or permission or authorization required
                            from any other party or entity to use, distribute or
                            otherwise exploit in all manners permitted by these
                            Terms of Use and Privacy Policy, all trademarks,
                            copyrights, patents, trade secrets, privacy and
                            publicity rights and / or other proprietary rights
                            contained in any content that you submit, post,
                            upload, distribute or otherwise transmit or make
                            available.
                          </p>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>v.</span>{" "}
                            &nbsp;You will not (a) use any services provided by
                            the Platform for commercial purposes of any kind, or
                            (b) advertise or sell any products, services or
                            otherwise (whether or not for profit), or solicit
                            others (including, without limitation, solicitations
                            for contributions or donations) or use any public
                            forum for commercial purposes of any kind. In the
                            event you want to advertise your product or service
                            contact contact@MothersFood.in.
                          </p>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>vi.</span>{" "}
                            &nbsp;You will not use the Platform in any way that
                            is unlawful, or harms us or any other person or
                            entity, as determined in our sole discretion.
                          </p>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>vii.</span>{" "}
                            &nbsp;You will not post, submit, upload, distribute,
                            or otherwise transmit or make available any software
                            or other computer files that contain a virus or
                            other harmful component, or otherwise impair or
                            damage the Platform or any connected network, or
                            otherwise interfere with any person or entity's use
                            or enjoyment of the Platform.
                          </p>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>viii.</span>{" "}
                            &nbsp;You will not use another person's username,
                            password or other account information, or another
                            person's name, likeness, voice, image or photograph
                            or impersonate any person or entity or misrepresent
                            your identity or affiliation with any person or
                            entity.
                          </p>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>ix.</span>{" "}
                            &nbsp;You will not engage in any form of antisocial,
                            disrupting, or destructive acts, including
                            "flaming," "spamming," "flooding," "trolling," and
                            "griefing" as those terms are commonly understood
                            and used on the Internet.
                          </p>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>x.</span>{" "}
                            &nbsp;You will not delete or modify any content of
                            the Platform, including but not limited to, legal
                            notices, disclaimers or proprietary notices such as
                            copyright or trademark symbols, logos, that you do
                            not own or have express permission to modify.
                          </p>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>xi.</span>{" "}
                            &nbsp;You will not post or contribute any
                            information or data that may be obscene, indecent,
                            pornographic, vulgar, profane, racist, sexist,
                            discriminatory, offensive, derogatory, harmful,
                            harassing, threatening, embarrassing, malicious,
                            abusive, hateful, menacing, defamatory, untrue or
                            political or contrary to our interest.
                          </p>
                          <p style={{ textAlign: "justify", fontSize: "15px" }}>
                            {" "}
                            <span style={{ color: "#06b590" }}>xii.</span>{" "}
                            &nbsp;You shall not access the Platform without
                            authority or use the Platform in a manner that
                            damages, interferes or disrupts:
                          </p>
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          You release and fully indemnify MothersFood and/or any
                          of its officers and representatives from any cost,
                          damage, liability or other consequence of any of the
                          actions of the Users of the Platform and specifically
                          waive any claims that you may have in this behalf
                          under any applicable laws of India. Notwithstanding
                          its reasonable efforts in that behalf, MothersFood
                          cannot take responsibility or control the information
                          provided by other Users which is made available on the
                          Platform. You may find other User's information to be
                          offensive, harmful, inconsistent, inaccurate, or
                          deceptive. Please use caution and practice safe
                          trading when using the Platform.
                        </li>
                      </ol>
                    </li>
                    <li
                      style={{ textAlign: "justify", fontSize: "15px" }}
                      className="numbers-roman"
                    >
                      <h6 style={{ textAlign: "justify", fontSize: "15px" }}>
                        <b>Access to the Platform, Accuracy and security</b>
                      </h6>
                      <ol className="number-list number--list1">
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          We endeavour to make the Platform available to during
                          Merchant working hours. However, we do not represent
                          that access to the Platform will be uninterrupted,
                          timely, error free, free of viruses or other harmful
                          components or that such defects will be corrected.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          We do not warrant that the Platform will be compatible
                          with all hardware and software which you may use. We
                          shall not be liable for damage to, or viruses or other
                          code that may affect, any equipment (including but not
                          limited to your mobile device), software, data or
                          other property as a result of your download,
                          installation, access to or use of the Platform or your
                          obtaining any material from, or as a result of using,
                          the Platform. We shall also not be liable for the
                          actions of third parties.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          We do not represent or warranty that the information
                          available on the Platform will be correct, accurate or
                          otherwise reliable.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          We reserve the right to suspend or withdraw access to
                          the Platform to you personally, or to all users
                          temporarily or permanently at any time without notice.
                          We may any time at our sole discretion reinstate
                          suspended users. A suspended User may not register or
                          attempt to register with us or use the Platform in any
                          manner whatsoever until such time that such user is
                          reinstated by us.
                        </li>
                      </ol>
                    </li>
                    <li
                      style={{ textAlign: "justify", fontSize: "15px" }}
                      className="numbers-roman"
                    >
                      <h6 style={{ textAlign: "justify", fontSize: "15px" }}>
                        <b>
                          Relationship with operators if the Platform is
                          accessed on mobile devices
                        </b>
                      </h6>
                      <ol className="number-list number--list1">
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          In the event the Platform is accessed on a mobile
                          device, it is not associated, affiliated, sponsored,
                          endorsed or in any way linked to any platform
                          operator, including, without limitation, Apple,
                          Google, Android or RIM Blackberry (each being an "
                          Operator").
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          Your download, installation, access to or use of the
                          Platform is also bound by the terms and conditions of
                          the Operator.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          You and we acknowledge that these Terms of Use are
                          concluded between you and us only, and not with an
                          Operator, and we, not those Operators, are solely
                          responsible for the Platform and the content thereof
                          to the extent specified in these Terms of Use.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          The license granted to you for the Platform is limited
                          to a non-transferable license to use the Platform on a
                          mobile device that you own or control and as permitted
                          by these Terms of Use.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          We are solely responsible for providing any
                          maintenance and support services with respect to the
                          Platform as required under applicable law. You and we
                          acknowledge that an Operator has no obligation
                          whatsoever to furnish any maintenance and support
                          services with respect to the Platform.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          You and we acknowledge that we, not the relevant
                          Operator, are responsible for addressing any claims of
                          you or any third party relating to the Platform or
                          your possession and/or use of the Platform, including,
                          but not limited to: (i) any claim that the Platform
                          fails to conform to any applicable legal or regulatory
                          requirement; and (ii) claims arising under consumer
                          protection or similar legislation.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          You and we acknowledge that, in the event of any third
                          party claim that the Platform or your possession and
                          use of the Platform infringes that third party's
                          intellectual property rights, we, not the relevant
                          Operator, will be solely responsible for the
                          investigation, defence, settlement and discharge of
                          any such intellectual property infringement claim.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          You must comply with any applicable third party terms
                          of agreement when using the Platform (e.g. you must
                          ensure that your use of the Platform is not in
                          violation of your mobile device agreement or any
                          wireless data service agreement).
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          You and we acknowledge and agree that the relevant
                          Operator, and that Operator's subsidiaries, are third
                          party beneficiaries of these Terms of Use, and that,
                          upon your acceptance of these Terms of Use, that
                          Operator will have the right (and will be deemed to
                          have accepted the right) to enforce these Terms of Use
                          against you as a third party beneficiary thereof.
                        </li>
                      </ol>
                    </li>
                    <li
                      style={{ textAlign: "justify", fontSize: "15px" }}
                      className="numbers-roman"
                    >
                      <h6 style={{ textAlign: "justify", fontSize: "15px" }}>
                        <b>Disclaimers</b>
                      </h6>
                      <ol className="number-list number--list1">
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          THE PLATFORM MAY BE UNDER CONSTANT UPGRADES, AND SOME
                          FUNCTIONS AND FEATURES MAY NOT BE FULLY OPERATIONAL.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          DUE TO THE VAGARIES THAT CAN OCCUR IN THE ELECTRONIC
                          DISTRIBUTION OF INFORMATION AND DUE TO THE LIMITATIONS
                          INHERENT IN PROVIDING INFORMATION OBTAINED FROM
                          MULTIPLE SOURCES, THERE MAY BE DELAYS, OMISSIONS, OR
                          INACCURACIES IN THE CONTENT PROVIDED ON THE PLATFORM
                          OR DELAY OR ERRORS IN FUNCTIONALITY OF THE PLATFORM.
                          AS A RESULT, WE DO NOT REPRESENT THAT THE INFORMATION
                          POSTED IS CORRECT IN EVERY CASE.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          WE EXPRESSLY DISCLAIM ALL LIABILITIES THAT MAY ARISE
                          AS A CONSEQUENCE OF ANY UNAUTHORIZED USE OF CREDIT/
                          DEBIT CARDS.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          YOU ACKNOWLEDGE THAT THIRD PARTY SERVICES ARE
                          AVAILABLE ON THE PLATFORM. WE MAY HAVE FORMED
                          PARTNERSHIPS OR ALLIANCES WITH SOME OF THESE THIRD
                          PARTIES FROM TIME TO TIME IN ORDER TO FACILITATE THE
                          PROVISION OF CERTAIN SERVICES TO YOU. HOWEVER, YOU
                          ACKNOWLEDGE AND AGREE THAT AT NO TIME ARE WE MAKING
                          ANY REPRESENTATION OR WARRANTY REGARDING ANY THIRD
                          PARTY'S SERVICES NOR WILL WE BE LIABLE TO YOU OR ANY
                          THIRD PARTY FOR ANY CONSEQUENCES OR CLAIMS ARISING
                          FROM OR IN CONNECTION WITH SUCH THIRD PARTY INCLUDING,
                          AND NOT LIMITED TO, ANY LIABILITY OR RESPONSIBILITY
                          FOR, DEATH, INJURY OR IMPAIRMENT EXPERIENCED BY YOU OR
                          ANY THIRD PARTY. YOU HEREBY DISCLAIM AND WAIVE ANY
                          RIGHTS AND CLAIMS YOU MAY HAVE AGAINST US WITH RESPECT
                          TO THIRD PARTY'S / MERCHANTS SERVICES.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          MOTHERSFOOD DISCLAIMS AND ALL LIABILITY THAT MAY ARISE
                          DUE TO ANY VIOLATION OF THE FOOD SAFETY AND STANDARDS
                          ACT, 2006 AND APPLICABLE RULES AND REGULATIONS MADE
                          THEREUNDER AND SUCH LIABILITY SHALL BE ATTRIBUTABLE TO
                          THE MERCHANT.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          WHILE THE MATERIALS PROVIDED ON THE PLATFORM WERE
                          PREPARED TO PROVIDE ACCURATE INFORMATION REGARDING THE
                          SUBJECT DISCUSSED, THE INFORMATION CONTAINED IN THESE
                          MATERIALS IS BEING MADE AVAILABLE WITH THE
                          UNDERSTANDING THAT WE MAKE NO GUARANTEES,
                          REPRESENTATIONS OR WARRANTIES WHATSOEVER, WHETHER
                          EXPRESSED OR IMPLIED, WITH RESPECT TO PROFESSIONAL
                          QUALIFICATIONS, EXPERTISE, QUALITY OF WORK OR OTHER
                          INFORMATION HEREIN. FURTHER, WE DO NOT, IN ANY WAY,
                          ENDORSE ANY SERVICE OFFERED OR DESCRIBED HEREIN. IN NO
                          EVENT SHALL WE BE LIABLE TO YOU OR ANY THIRD PARTY FOR
                          ANY DECISION MADE OR ACTION TAKEN IN RELIANCE ON SUCH
                          INFORMATION.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          THE INFORMATION PROVIDED HEREUNDER IS PROVIDED "AS
                          IS". WE AND / OR OUR EMPLOYEES MAKE NO WARRANTY OR
                          REPRESENTATION REGARDING THE TIMELINESS, CONTENT,
                          SEQUENCE, ACCURACY, EFFECTIVENESS OR COMPLETENESS OF
                          ANY INFORMATION OR DATA FURNISHED HEREUNDER OR THAT
                          THE INFORMATION OR DATA PROVIDED HEREUNDER MAY BE
                          RELIED UPON. MULTIPLE RESPONSES MAY USUALLY BE MADE
                          AVAILABLE FROM DIFFERENT SOURCES AND IT IS LEFT TO THE
                          JUDGEMENT OF USERS BASED ON THEIR SPECIFIC
                          CIRCUMSTANCES TO USE, ADAPT, MODIFY OR ALTER
                          SUGGESTIONS OR USE THEM IN CONJUNCTION WITH ANY OTHER
                          SOURCES THEY MAY HAVE, THEREBY ABSOLVING US AS WELL AS
                          OUR CONSULTANTS, BUSINESS ASSOCIATES, AFFILIATES,
                          BUSINESS PARTNERS AND EMPLOYEES FROM ANY KIND OF
                          PROFESSIONAL LIABILITY.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          WE SHALL NOT BE LIABLE TO YOU OR ANYONE ELSE FOR ANY
                          LOSSES OR INJURY ARISING OUT OF OR RELATING TO THE
                          INFORMATION PROVIDED ON THE PLATFORM. IN NO EVENT WILL
                          WE OR OUR EMPLOYEES, AFFILIATES, AUTHORS OR AGENTS BE
                          LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DECISION MADE
                          OR ACTION TAKEN BY YOUR RELIANCE ON THE CONTENT
                          CONTAINED HEREIN.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          IN NO EVENT WILL WE BE LIABLE FOR ANY DAMAGES
                          (INCLUDING, WITHOUT LIMITATION, DIRECT, INDIRECT,
                          INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY
                          DAMAGES, DAMAGES ARISING FROM PERSONAL INJURY/WRONGFUL
                          DEATH, AND DAMAGES RESULTING FROM LOST PROFITS, LOST
                          DATA OR BUSINESS INTERRUPTION), RESULTING FROM ANY
                          SERVICES PROVIDED BY ANY THIRD PARTY OR MERCHANT
                          ACCESSED THROUGH THE PLATFORM, WHETHER BASED ON
                          WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY
                          AND WHETHER OR NOT WE ARE ADVISED OF THE POSSIBILITY
                          OF SUCH DAMAGES.
                        </li>
                      </ol>
                    </li>
                    <li
                      style={{ textAlign: "justify", fontSize: "15px" }}
                      className="numbers-roman"
                    >
                      <h6 style={{ textAlign: "justify", fontSize: "15px" }}>
                        <b>Intellectual property</b>
                      </h6>
                      <ol className="number-list number--list1">
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          We are either the owner of intellectual property
                          rights or have the non-exclusive, worldwide,
                          perpetual, irrevocable, royalty free, sub-licensable
                          (through multiple tiers) right to exercise the
                          intellectual property, in the Platform, and in the
                          material published on it.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          You may print off one copy, and may download extracts,
                          of any page(s) from the Platform for your personal
                          reference and you may draw the attention of others
                          within your organisation to material available on the
                          Platform.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          You must not modify the paper or digital copies of any
                          materials you have printed off or downloaded in any
                          way, and you must not use any illustrations,
                          photographs, video or audio sequences or any graphics
                          separately from any accompanying text.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          You must not use any part of the materials on the
                          Platform for commercial purposes without obtaining a
                          licence to do so from us or our licensors.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          If you print off, copy or download any part of the
                          Platform in breach of these Terms of Use, your right
                          to use the Platform will cease immediately and you
                          must, at our option, return or destroy any copies of
                          the materials you have made.
                        </li>
                      </ol>
                    </li>
                    <li
                      style={{ textAlign: "justify", fontSize: "15px" }}
                      className="numbers-roman"
                    >
                      <h6 style={{ textAlign: "justify", fontSize: "15px" }}>
                        <b>Treatment of information provided by you</b>
                      </h6>
                      <ol className="number-list number--list1">
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          We process information provided by you to us in
                          accordance with our Privacy Policy.
                        </li>
                      </ol>
                    </li>

                    <li
                      style={{ textAlign: "justify", fontSize: "15px" }}
                      className="numbers-roman"
                    >
                      <h6 style={{ textAlign: "justify", fontSize: "15px" }}>
                        <b>Third Party Content</b>
                      </h6>
                      <ol className="number-list number--list1">
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          We cannot and will not assure that other users are or
                          will be complying with the foregoing rules or any
                          other provisions of these Terms of Use, and, as
                          between you and us, you hereby assume all risk of harm
                          or injury resulting from any such lack of compliance.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          You acknowledge that when you access a link that
                          leaves the Platform, the site you will enter into is
                          not controlled by us and different terms of use and
                          privacy policy may apply. By assessing links to other
                          sites, you acknowledge that we are not responsible for
                          those sites. We reserve the right to disable links to
                          and / or from third-party sites to the Platform,
                          although we are under no obligation to do so.
                        </li>
                      </ol>
                    </li>
                    <li
                      style={{ textAlign: "justify", fontSize: "15px" }}
                      className="numbers-roman"
                    >
                      <h6 style={{ textAlign: "justify", fontSize: "15px" }}>
                        <b>Severability</b>
                      </h6>
                      <p style={{ textAlign: "justify", fontSize: "15px" }}>
                        If any of these Terms of Use should be determined to be
                        illegal, invalid or otherwise unenforceable by reason of
                        the laws of any state or country in which these Terms of
                        Use are intended to be effective, then to the extent and
                        within the jurisdiction where that term is illegal,
                        invalid or unenforceable, it shall be severed and
                        deleted and the remaining Terms of Use shall survive,
                        remain in full force and effect and continue to be
                        binding and enforceable.
                      </p>
                    </li>
                    <li
                      style={{ textAlign: "justify", fontSize: "15px" }}
                      className="numbers-roman"
                    >
                      <h6 style={{ textAlign: "justify", fontSize: "15px" }}>
                        <b>Non-assignment</b>
                      </h6>
                      <p style={{ textAlign: "justify", fontSize: "15px" }}>
                        You shall not assign or transfer or purport to assign or
                        transfer the contract between you and us to any other
                        person.
                      </p>
                    </li>
                    <li
                      style={{ textAlign: "justify", fontSize: "15px" }}
                      className="numbers-roman"
                    >
                      <h6 style={{ textAlign: "justify", fontSize: "15px" }}>
                        <b>Arbitration and Dispute Resolution</b>
                      </h6>
                      <p style={{ textAlign: "justify", fontSize: "15px" }}>
                      All claims and disputes arising out of but not limited to this Website, Goods Rendered, Service provided, PO and Invoices issued by our company (Company's Name) are to be settled by binding arbitration. With an objective to adjudicate the dispute, PDR Organization Private Limited (PrivateCourt) shall conduct the arbitration by appointing the sole arbitrator and the parties shall be bound by any and all rules of PDR Organization Private Limited (PrivateCourt) and any award/decision rendered. Any such arbitration shall be conducted by an experienced arbitrator/lawyer and shall include a written record of the arbitration hearing. Any decision or award as a result of any such arbitration proceeding shall be a speaking Award and shall be in writing. 
The place/venue/seat of arbitration shall be Mumbai. Courts in Mumbai shall  have exclusive jurisdiction with reference to any Petition/Application/Appeal regarding the above-mentioned arbitration proceedings.
                      </p>
                    </li>
                    <li
                      style={{ textAlign: "justify", fontSize: "15px" }}
                      className="numbers-roman"
                    >
                      <h6 style={{ textAlign: "justify", fontSize: "15px" }}>
                        <b>IP Notice and Take Down Policy</b>
                      </h6>
                      <ol className="number-list number--list1">
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          MothersFood has put in place IP Notice and Take Down
                          Policy (" Take Down Policy") so that intellectual
                          property owners could easily report listings that
                          infringe their right to ensure that infringing
                          products are removed from the site, as they erode
                          Buyer and good Seller trust.
                        </li>
                        <li
                          style={{ textAlign: "justify", fontSize: "15px" }}
                          className="numbers-decimal"
                        >
                          Only the intellectual property rights owner can report
                          potentially infringing products or listings through
                          Take Down Policy by way of Notice of infringement in
                          the specified format. If you are not the intellectual
                          property rights owner, you can still help by getting
                          in touch with the rights owner and encouraging them to
                          contact us. (Note: MothersFood does not and cannot
                          verify that Merchants have the right or ability to
                          sell or distribute their listed products. However,
                          MothersFood is committed ensure that item listings do
                          not infringe upon intellectual property rights of
                          third parties once an authorized representative of the
                          rights owner properly reports them to MothersFood.)
                        </li>
                      </ol>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/*<!-- ends: .post-details -->*/}
        </div>
      </section>
      {/*<!-- ends: .section-padding-sm -->*/}
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Project;
