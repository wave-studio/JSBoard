import React from "react";
import Link from "next/link";
import { XIcon, MenuAlt3Icon } from "@heroicons/react/outline";
import Head from "next/head";

export default class JSBoardNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: this.props.username || "Guest",
        loggedin: this.props.loggedin || false,
        admin: this.props.admin || false,
        sitename: this.props.sitename || "Azyn",
      },
      dropdownopen: false,
    };
  }

  render() {
    return (
      //need to add images later
      <>
        <Head>
          {/*Primary Meta Tags*/}
          <title>{this.props.name + " | JSBoard"}</title>
          <meta name="title" content="Meta Tags — Preview, Edit and Generate" />
          <meta
            name="description"
            content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
          />

          {/*Open Graph / Facebook*/}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://metatags.io/" />
          <meta
            property="og:title"
            content="Meta Tags — Preview, Edit and Generate"
          />
          <meta
            property="og:description"
            content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
          />
          <meta
            property="og:image"
            content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
          />

          {/*Twitter*/}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://metatags.io/" />
          <meta
            property="twitter:title"
            content="Meta Tags — Preview, Edit and Generate"
          />
          <meta
            property="twitter:description"
            content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
          />
          <meta
            property="twitter:image"
            content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
          />
        </Head>
        <div className="h-1 bg-[#282a2e]">
          <progress id="file" max="1000" value="1000" className={"w-full m-0 " + (this.props.loading ? "" : "hidden")} />
        </div>
        <div className="w-full h-16 flex items-center text-gray-100 bg-coolGray-800 shadow-lg sticky top-[-1px] z-40">
          <div className="mx-auto max-w-screen-xl px-10 font-semibold flex flex-grow">
            <Link href="/">
              <a className="my-auto">JSBoard</a>
            </Link>
            <div className="flex flex-grow flex-row-reverse">
              <div
                className="text-gray-200 md:hidden bg-coolGray-700 p-2 rounded-full hover:opacity-70"
                onClick={() =>
                  this.setState({ dropdownopen: !this.state.dropdownopen })
                }
              >
                <span className={this.state.dropdownopen ? "hidden" : ""}>
                  <MenuAlt3Icon className="h-5 w-auto" />
                </span>
                <span className={this.state.dropdownopen ? "" : "hidden"}>
                  <XIcon className="h-5 w-auto" />
                </span>
              </div>
              <div className="btn btn-white">
                <Link href="/signup">
                  <span
                    className={
                      "bg-coolGray-700" + !this.state.loggedin ? "" : "hidden"
                    }
                  >
                    Sign Up
                  </span>
                </Link>

                <Link href={"/profiles/" + this.state.username}>
                  <span
                    className={
                      this.state.loggedin && !this.state.admin ? "" : "hidden"
                    }
                  >
                    Profile
                  </span>
                </Link>
                <Link href="/staff/dashboard">
                  <span className={this.state.admin ? "" : "hidden"}>
                    Dashboard
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
