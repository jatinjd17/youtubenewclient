import React, { useState } from "react";
import "react-stacked-carousel/dist/index.css";
import ReactCardCarousel from "react-card-carousel";
import LinesEllipsis from "react-lines-ellipsis";

function ChannelDetails({ data }) {
  const maindata = JSON.parse(data);

  const [card, setCard] = useState(null);
  const onCardChange = (event) => {
    console.log("Card", event);
  };

  return (
    <div style={{ width: "100%" }}>
      <img
        src="./2.jpg"
        height={"800"}
        width={"550"}
        style={{ position: "absolute", zIndex: -30, marginLeft: -40 }}
        // style={{ borderRadius: 100, marginLeft: 100 }}
      />
      <div style={{ width: "30%" }}>
        <div className="featurechannelimage">
          <img
            src="./featured.jpg"
            height={160}
            width={550}
            style={{ zIndex: 20 }}
            // style={{ borderRadius: 100, marginLeft: 100 }}
          />
        </div>
        <div className="topall">
          <img
            src={maindata[0].channelicon}
            height={130}
            width={130}
            style={{
              borderRadius: 100,
              marginLeft: 150,
              marginTop: 90,
              // position: "absolute",
            }}
          />
          <div style={{ position: "absolute" }}>
            <div
              style={{
                position: "absolute",
                display: "flex",
                flexDirection: "row",
                // marginBottom: 10,
                marginTop: -68,
                // justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  marginTop: -140,
                  width: 140,
                  height: 60,
                  borderRadius: 20,
                  marginRight: 70,
                  backgroundColor: "black",
                  padding: 20,
                  marginLeft: 40,
                }}
              >
                <div style={{ marginTop: -30, textAlign: "center" }}>
                  <div>
                    <p
                      style={{
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      Sub Count
                    </p>
                  </div>
                  <div style={{ marginTop: -14, textAlign: "center" }}>
                    <p style={{ fontWeight: "bold", color: "white" }}>
                      {maindata[0].subcount}
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginTop: -140,
                  width: 140,
                  height: 60,
                  borderRadius: 20,
                  marginRight: 20,
                  backgroundColor: "black",
                  padding: 20,
                }}
              >
                <div style={{ marginTop: -30, textAlign: "center" }}>
                  <div>
                    <p style={{ fontWeight: "bold", color: "white" }}>
                      View Count
                    </p>
                  </div>
                  <div style={{ marginTop: -14, textAlign: "center" }}>
                    <p style={{ fontWeight: "bold", color: "white" }}>
                      {maindata[0].viewcount}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                display: "flex",
                flexDirection: "row",
                marginTop: -70,
                // display: "flex",
                // flexDirection: "row",
                // justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  marginTop: -65,
                  width: 140,
                  height: 60,
                  borderRadius: 20,
                  marginRight: 150,
                  backgroundColor: "black",
                  padding: 20,
                  marginLeft: 0,
                }}
              >
                <div style={{ marginTop: -30, textAlign: "center" }}>
                  <div>
                    <p style={{ fontWeight: "bold", color: "white" }}>
                      Video Count
                    </p>
                  </div>
                  <div style={{ marginTop: -14, textAlign: "center" }}>
                    <p style={{ fontWeight: "bold", color: "white" }}>
                      {maindata[0].videocount}
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginTop: -65,
                  width: 140,
                  height: 60,
                  borderRadius: 20,
                  marginRight: 20,
                  backgroundColor: "black",
                  padding: 20,
                }}
              >
                <div style={{ marginTop: -25, textAlign: "center" }}>
                  <div>
                    <p
                      style={{
                        fontWeight: "bold",
                        color: "white",
                        fontSize: 12,
                      }}
                    >
                      Channel Created
                    </p>
                  </div>
                  <div style={{ marginTop: -14, textAlign: "center" }}>
                    <p style={{ fontWeight: "bold", color: "white" }}>
                      {maindata[0].channelcreatedate}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: -20, textAlign: "center" }}>
            <h1 className="channel-description" style={{ color: "white" }}>
              {maindata[0].channelname}
            </h1>
          </div>
          <div
            style={{
              marginTop: 20,
              textAlign: "center",
              backgroundColor: "#ECECEC",
              padding: 1,
              paddingLeft: 10,
              paddingRight: 10,
              borderRadius: 15,
              height: 120,
              width: 470,
              marginLeft: -20,
            }}
          >
            <p className="channel-description">
              <b>Channel Description: </b>
              {maindata[0].channeldescription}
            </p>
          </div>
          <div style={{ marginLeft: -20 }}>
            <h2
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "black",
                marginTop: 30,
              }}
            >
              Videos
            </h2>
          </div>
        </div>

        <div className="carausel-card" style={{}}>
          <ReactCardCarousel
            autoplay={true}
            autoplay_speed={5000}
            // alignment={"vertical"}
            spread={"wide"}
          >
            {maindata[0].videoimage1 != null ? (
              <div
                style={{
                  // height: "330px",
                  // width: "260px",
                  height: "290px",
                  width: "230px",
                  background: "#52C0F5",
                  color: "#FFF",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  borderRadius: "10px",
                }}
              >
                <div style={{ marginLeft: 15, paddingTop: 10 }}>
                  <img src={maindata[0].videoimage1} height={110} width={200} />

                  <h2 className="text-ellipsis--2">
                    {maindata[0].videostitle1}
                  </h2>
                  <p
                    className="text-ellipsis--4--description"
                    style={{
                      color: "black",
                      fontSize: "11px",
                      fontWeight: "bolder",
                      marginTop: -5,
                    }}
                  >
                    {maindata[0].videodescription1}
                  </p>
                </div>
              </div>
            ) : (
              <div
                style={{
                  // height: "330px",
                  // width: "260px",
                  height: "290px",
                  width: "230px",
                  background: "#52C0F5",
                  color: "#FFF",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  borderRadius: "10px",
                }}
              >
                <h1
                  style={{
                    textAlign: "center",
                    paddingTop: 100,
                  }}
                >
                  No Video
                </h1>
              </div>
            )}
            {maindata[0].videoimage2 != null ? (
              <div
                style={{
                  height: "290px",
                  width: "230px",
                  background: "#52C0F5",
                  color: "#FFF",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  borderRadius: "10px",
                }}
              >
                <div style={{ marginLeft: 15, paddingTop: 10 }}>
                  <img src={maindata[0].videoimage2} height={110} width={200} />

                  <h2 className="text-ellipsis--2">
                    {maindata[0].videostitle2}
                  </h2>
                  <p
                    className="text-ellipsis--4--description"
                    style={{
                      color: "black",
                      fontSize: "11px",
                      fontWeight: "bolder",
                      marginTop: -5,
                    }}
                  >
                    {maindata[0].videodescription2}
                  </p>
                </div>
              </div>
            ) : (
              <div
                style={{
                  // height: "330px",
                  // width: "260px",
                  height: "290px",
                  width: "230px",
                  background: "#52C0F5",
                  color: "#FFF",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  borderRadius: "10px",
                }}
              >
                <h1
                  style={{
                    textAlign: "center",
                    paddingTop: 100,
                  }}
                >
                  No Video
                </h1>
              </div>
            )}
            {maindata[0].videoimage3 != null ? (
              <div
                style={{
                  height: "290px",
                  width: "230px",
                  background: "#52C0F5",
                  color: "#FFF",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  borderRadius: "10px",
                }}
              >
                <div style={{ marginLeft: 15, paddingTop: 10 }}>
                  <img src={maindata[0].videoimage3} height={110} width={200} />
                  <h2 className="text-ellipsis--2">
                    {maindata[0].videostitle3}
                  </h2>
                  <p
                    className="text-ellipsis--4--description"
                    style={{
                      color: "black",
                      fontSize: "11px",
                      fontWeight: "bolder",
                      marginTop: -5,
                    }}
                  >
                    {maindata[0].videodescription3}
                  </p>
                </div>
              </div>
            ) : (
              <div
                style={{
                  // height: "330px",
                  // width: "260px",
                  height: "290px",
                  width: "230px",
                  background: "#52C0F5",
                  color: "#FFF",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  borderRadius: "10px",
                }}
              >
                <h1
                  style={{
                    textAlign: "center",
                    paddingTop: 100,
                  }}
                >
                  No Video
                </h1>
              </div>
            )}
            {maindata[0].videoimage4 != null ? (
              <div
                style={{
                  height: "290px",
                  width: "230px",
                  background: "#52C0F5",
                  color: "#FFF",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  borderRadius: "10px",
                }}
              >
                <div style={{ marginLeft: 15, paddingTop: 10 }}>
                  <img src={maindata[0].videoimage4} height={110} width={200} />
                  <h2 className="text-ellipsis--2">
                    {maindata[0].videostitle4}
                  </h2>
                  <p
                    className="text-ellipsis--4--description"
                    style={{
                      color: "black",
                      fontSize: "11px",
                      fontWeight: "bolder",
                      marginTop: -5,
                    }}
                  >
                    {maindata[0].videodescription4}
                  </p>
                </div>
              </div>
            ) : (
              <div
                style={{
                  // height: "330px",
                  // width: "260px",
                  height: "290px",
                  width: "230px",
                  background: "#52C0F5",
                  color: "#FFF",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  borderRadius: "10px",
                }}
              >
                <h1
                  style={{
                    textAlign: "center",
                    paddingTop: 100,
                  }}
                >
                  No Video
                </h1>
              </div>
            )}
            {maindata[0].videoimage5 != null ? (
              <div
                style={{
                  height: "290px",
                  width: "230px",
                  background: "#52C0F5",
                  color: "#FFF",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  borderRadius: "10px",
                }}
              >
                <div style={{ marginLeft: 15, paddingTop: 10 }}>
                  <img src={maindata[0].videoimage5} height={110} width={200} />

                  <h2 className="text-ellipsis--2">
                    {maindata[0].videostitle5}
                  </h2>
                  <p
                    className="text-ellipsis--4--description"
                    style={{
                      color: "black",
                      fontSize: "11px",
                      fontWeight: "bolder",
                      marginTop: -5,
                    }}
                  >
                    {maindata[0].videodescription5}
                  </p>
                </div>
              </div>
            ) : (
              <div
                style={{
                  // height: "330px",
                  // width: "260px",
                  height: "290px",
                  width: "230px",
                  background: "#52C0F5",
                  color: "#FFF",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  borderRadius: "10px",
                }}
              >
                <h1
                  style={{
                    textAlign: "center",
                    paddingTop: 100,
                  }}
                >
                  No Video
                </h1>
              </div>
            )}
          </ReactCardCarousel>
        </div>
      </div>
      {/* ////////////////////////////////////////////////////////// */}

      {/* ///////////////////////////////////////////// */}

      <div className="secondcolumn" style={{ width: "30%" }}>
        <img
          src="./3.jpg"
          height={"800"}
          width={"550"}
          style={{ position: "absolute", zIndex: -30, marginLeft: -40 }}
          // style={{ borderRadius: 100, marginLeft: 100 }}
        />
        <div className="featurechannelimage">
          <img
            src="./featured2.jpg"
            height={160}
            width={550}
            style={{ zIndex: 20 }}
            // style={{ borderRadius: 100, marginLeft: 100 }}
          />
        </div>
        <div className="topall">
          <img
            src={maindata[1].channelicon}
            height={130}
            width={130}
            style={{
              borderRadius: 100,
              marginLeft: 150,
              marginTop: 90,
              // position: "absolute",
            }}
          />
          <div style={{ position: "absolute" }}>
            <div
              style={{
                position: "absolute",
                display: "flex",
                flexDirection: "row",
                // marginBottom: 10,
                marginTop: -68,
                // justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  marginTop: -140,
                  width: 140,
                  height: 60,
                  borderRadius: 20,
                  marginRight: 70,
                  backgroundColor: "black",
                  padding: 20,
                  marginLeft: 40,
                }}
              >
                <div style={{ marginTop: -30, textAlign: "center" }}>
                  <div>
                    <p style={{ fontWeight: "bold", color: "white" }}>
                      Sub Count
                    </p>
                  </div>
                  <div style={{ marginTop: -14, textAlign: "center" }}>
                    <p style={{ fontWeight: "bold", color: "white" }}>
                      {maindata[1].subcount}
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginTop: -140,
                  width: 140,
                  height: 60,
                  borderRadius: 20,
                  marginRight: 20,
                  backgroundColor: "black",
                  padding: 20,
                }}
              >
                <div style={{ marginTop: -30, textAlign: "center" }}>
                  <div>
                    <p style={{ fontWeight: "bold", color: "white" }}>
                      View Count
                    </p>
                  </div>
                  <div style={{ marginTop: -14, textAlign: "center" }}>
                    <p style={{ fontWeight: "bold", color: "white" }}>
                      {maindata[1].viewcount}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                display: "flex",
                flexDirection: "row",
                marginTop: -70,
                // display: "flex",
                // flexDirection: "row",
                // justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  marginTop: -65,
                  width: 140,
                  height: 60,
                  borderRadius: 20,
                  marginRight: 150,
                  backgroundColor: "black",
                  padding: 20,
                  marginLeft: 0,
                }}
              >
                <div style={{ marginTop: -30, textAlign: "center" }}>
                  <div>
                    <p style={{ fontWeight: "bold", color: "white" }}>
                      Video Count
                    </p>
                  </div>
                  <div style={{ marginTop: -14, textAlign: "center" }}>
                    <p style={{ fontWeight: "bold", color: "white" }}>
                      {maindata[1].videocount}
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginTop: -65,
                  width: 140,
                  height: 60,
                  borderRadius: 20,
                  marginRight: 20,
                  backgroundColor: "black",
                  padding: 20,
                }}
              >
                <div style={{ marginTop: -25, textAlign: "center" }}>
                  <div>
                    <p
                      style={{
                        fontWeight: "bold",
                        color: "white",
                        fontSize: 12,
                      }}
                    >
                      Channel Created
                    </p>
                  </div>
                  <div style={{ marginTop: -14, textAlign: "center" }}>
                    <p style={{ fontWeight: "bold", color: "white" }}>
                      {maindata[1].channelcreatedate}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: -20, textAlign: "center" }}>
            <h1 className="channel-description">{maindata[1].channelname}</h1>
          </div>
          <div
            style={{
              marginTop: 20,
              textAlign: "center",
              backgroundColor: "white",
              padding: 1,
              paddingLeft: 10,
              paddingRight: 10,
              borderRadius: 15,
              height: 120,
              width: 470,

              marginLeft: -20,
            }}
          >
            <p className="channel-description">
              <b>Channel Description: </b> {maindata[1].channeldescription}
            </p>
          </div>
          <div
            style={{
              marginLeft: -20,
            }}
          >
            <h2
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "black",
                marginTop: 30,
              }}
            >
              Videos
            </h2>
          </div>
        </div>

        <div className="secondcarouselcard" style={{}}>
          <ReactCardCarousel
            autoplay={true}
            autoplay_speed={5000}
            // alignment={"vertical"}
            spread={"wide"}
          >
            {maindata[1].videoimage1 != null ? (
              <div
                style={{
                  // height: "330px",
                  // width: "260px",
                  height: "290px",
                  width: "230px",
                  background: "#52C0F5",
                  color: "#FFF",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  borderRadius: "10px",
                }}
              >
                <div style={{ marginLeft: 15, paddingTop: 10 }}>
                  <img src={maindata[1].videoimage1} height={110} width={200} />

                  <h2 className="text-ellipsis--2">
                    {maindata[1].videostitle1}
                  </h2>
                  <p
                    className="text-ellipsis--4--description"
                    style={{
                      color: "black",
                      fontSize: "11px",
                      fontWeight: "bolder",
                      marginTop: -5,
                    }}
                  >
                    {maindata[1].videodescription1}
                  </p>
                </div>
              </div>
            ) : (
              <div
                style={{
                  // height: "330px",
                  // width: "260px",
                  height: "290px",
                  width: "230px",
                  background: "#52C0F5",
                  color: "#FFF",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  borderRadius: "10px",
                }}
              >
                <h1
                  style={{
                    textAlign: "center",
                    paddingTop: 100,
                  }}
                >
                  No Video
                </h1>
              </div>
            )}
            {maindata[1].videoimage2 != null ? (
              <div
                style={{
                  height: "290px",
                  width: "230px",
                  background: "#52C0F5",
                  color: "#FFF",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  borderRadius: "10px",
                }}
              >
                <div style={{ marginLeft: 15, paddingTop: 10 }}>
                  <img src={maindata[1].videoimage2} height={110} width={200} />

                  <h2 className="text-ellipsis--2">
                    {maindata[1].videostitle2}
                  </h2>
                  <p
                    className="text-ellipsis--4--description"
                    style={{
                      color: "black",
                      fontSize: "11px",
                      fontWeight: "bolder",
                      marginTop: -5,
                    }}
                  >
                    {maindata[1].videodescription2}
                  </p>
                </div>
              </div>
            ) : (
              <div
                style={{
                  // height: "330px",
                  // width: "260px",
                  height: "290px",
                  width: "230px",
                  background: "#52C0F5",
                  color: "#FFF",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  borderRadius: "10px",
                }}
              >
                <h1
                  style={{
                    textAlign: "center",
                    paddingTop: 100,
                  }}
                >
                  No Video
                </h1>
              </div>
            )}
            {maindata[1].videoimage3 != null ? (
              <div
                style={{
                  height: "290px",
                  width: "230px",
                  background: "#52C0F5",
                  color: "#FFF",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  borderRadius: "10px",
                }}
              >
                <div style={{ marginLeft: 15, paddingTop: 10 }}>
                  <img src={maindata[1].videoimage3} height={110} width={200} />
                  <h2 className="text-ellipsis--2">
                    {maindata[1].videostitle3}
                  </h2>
                  <p
                    className="text-ellipsis--4--description"
                    style={{
                      color: "black",
                      fontSize: "11px",
                      fontWeight: "bolder",
                      marginTop: -5,
                    }}
                  >
                    {maindata[1].videodescription3}
                  </p>
                </div>
              </div>
            ) : (
              <div
                style={{
                  // height: "330px",
                  // width: "260px",
                  height: "290px",
                  width: "230px",
                  background: "#52C0F5",
                  color: "#FFF",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  borderRadius: "10px",
                }}
              >
                <h1
                  style={{
                    textAlign: "center",
                    paddingTop: 100,
                  }}
                >
                  No Video
                </h1>
              </div>
            )}
            {maindata[1].videoimage4 != null ? (
              <div
                style={{
                  height: "290px",
                  width: "230px",
                  background: "#52C0F5",
                  color: "#FFF",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  borderRadius: "10px",
                }}
              >
                <div style={{ marginLeft: 15, paddingTop: 10 }}>
                  <img src={maindata[1].videoimage4} height={110} width={200} />
                  <h2 className="text-ellipsis--2">
                    {maindata[1].videostitle4}
                  </h2>
                  <p
                    className="text-ellipsis--4--description"
                    style={{
                      color: "black",
                      fontSize: "11px",
                      fontWeight: "bolder",
                      marginTop: -5,
                    }}
                  >
                    {maindata[1].videodescription4}
                  </p>
                </div>
              </div>
            ) : (
              <div
                style={{
                  // height: "330px",
                  // width: "260px",
                  height: "290px",
                  width: "230px",
                  background: "#52C0F5",
                  color: "#FFF",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  borderRadius: "10px",
                }}
              >
                <h1
                  style={{
                    textAlign: "center",
                    paddingTop: 100,
                  }}
                >
                  No Video
                </h1>
              </div>
            )}
            {maindata[1].videoimage5 != null ? (
              <div
                style={{
                  height: "290px",
                  width: "230px",
                  background: "#52C0F5",
                  color: "#FFF",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  borderRadius: "10px",
                }}
              >
                <div style={{ marginLeft: 15, paddingTop: 10 }}>
                  <img src={maindata[1].videoimage5} height={110} width={200} />

                  <h2 className="text-ellipsis--2">
                    {maindata[1].videostitle5}
                  </h2>
                  <p
                    className="text-ellipsis--4--description"
                    style={{
                      color: "black",
                      fontSize: "11px",
                      fontWeight: "bolder",
                      marginTop: -5,
                    }}
                  >
                    {maindata[1].videodescription5}
                  </p>
                </div>
              </div>
            ) : (
              <div
                style={{
                  // height: "330px",
                  // width: "260px",
                  height: "290px",
                  width: "230px",
                  background: "#52C0F5",
                  color: "#FFF",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  borderRadius: "10px",
                }}
              >
                <h1
                  style={{
                    textAlign: "center",
                    paddingTop: 100,
                  }}
                >
                  No Video
                </h1>
              </div>
            )}
          </ReactCardCarousel>
        </div>
      </div>
      <div className="thirdcolumn">
        <img
          src="./5.jpg"
          height={"800"}
          width={"430"}
          style={{
            position: "absolute",
            zIndex: -30,
            marginLeft: -50,
          }}
          // style={{ borderRadius: 100, marginLeft: 100 }}
        />
        <div className="featurechannelimage">
          <img
            src="./5.jpg"
            height={160}
            width={440}
            style={{ zIndex: 20, marginLeft: -10, objectFit: "contain" }}
            // style={{ borderRadius: 100, marginLeft: 100 }}
          />
        </div>
        <div
          style={{ marginTop: 5, backgroundColor: "red" }}
          className="thirdcolcontainer anim"
          // id="channel_0"
        >
          <div>
            <img
              src={maindata[2][0].url}
              height={50}
              width={50}
              style={{
                borderRadius: 100,
                // marginLeft: 150,
                // marginTop: 90,
                // position: "absolute",
              }}
            />
          </div>
          <div
            style={{
              marginLeft: 50,
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: 170,
              whiteSpace: "nowrap",
            }}
          >
            <div
              style={
                {
                  // maxWidth: "100%",
                  // display: "-webkit-box",
                  // WebkitBoxOrient: "vertical",
                  // WebkitLineClamp: 1,
                  // overflow: "hidden",
                  // textOverflow: "ellipsis",
                }
              }
            >
              {maindata[2][0].name}
            </div>
            {/* <div>{maindata[2][1].url}</div> */}
            <div>{maindata[2][0].sub}</div>
          </div>
        </div>
        <div
          style={{ backgroundColor: "red" }}
          className="thirdcolcontainer anim"
        >
          <div>
            <img
              src={maindata[2][1].url}
              height={50}
              width={50}
              style={{
                borderRadius: 100,
                // marginLeft: 150,
                // marginTop: 90,
                // position: "absolute",
              }}
            />
          </div>
          <div
            style={{
              marginLeft: 50,

              overflow: "hidden",
              textOverflow: "ellipsis",
              width: 170,
              whiteSpace: "nowrap",
            }}
          >
            <div style={{}}>{maindata[2][1].name}</div>
            {/* <div>{maindata[2][1].url}</div> */}
            <div>{maindata[2][1].sub}</div>
          </div>
        </div>
        <div className="thirdcolcontainer">
          <div>
            <img
              src={maindata[2][2].url}
              height={50}
              width={50}
              style={{
                borderRadius: 100,
                // marginLeft: 150,
                // marginTop: 90,
                // position: "absolute",
              }}
            />
          </div>
          <div
            style={{
              marginLeft: 50,
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: 170,
              whiteSpace: "nowrap",
            }}
          >
            <div>{maindata[2][2].name}</div>
            {/* <div>{maindata[2][1].url}</div> */}
            <div>{maindata[2][2].sub}</div>
          </div>
        </div>
        <div className="thirdcolcontainer">
          <div>
            <img
              src={maindata[2][3].url}
              height={50}
              width={50}
              style={{
                borderRadius: 100,
                // marginLeft: 150,
                // marginTop: 90,
                // position: "absolute",
              }}
            />
          </div>
          <div
            style={{
              marginLeft: 50,
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: 170,
              whiteSpace: "nowrap",
            }}
          >
            <div>{maindata[2][3].name}</div>
            {/* <div>{maindata[2][1].url}</div> */}
            <div>{maindata[2][3].sub}</div>
          </div>
        </div>
        <div className="thirdcolcontainer">
          <div>
            <img
              src={maindata[2][4].url}
              height={50}
              width={50}
              style={{
                borderRadius: 100,
                // marginLeft: 150,
                // marginTop: 90,
                // position: "absolute",
              }}
            />
          </div>
          <div
            style={{
              marginLeft: 50,
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: 170,
              whiteSpace: "nowrap",
            }}
          >
            <div>{maindata[2][4].name}</div>
            {/* <div>{maindata[2][1].url}</div> */}
            <div>{maindata[2][4].sub}</div>
          </div>
        </div>
        <div className="thirdcolcontainer">
          <div>
            <img
              src={maindata[2][5].url}
              height={50}
              width={50}
              style={{
                borderRadius: 100,
                // marginLeft: 150,
                // marginTop: 90,
                // position: "absolute",
              }}
            />
          </div>
          <div
            style={{
              marginLeft: 50,
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: 170,
              whiteSpace: "nowrap",
            }}
          >
            <div>{maindata[2][5].name}</div>
            {/* <div>{maindata[2][1].url}</div> */}
            <div>{maindata[2][5].sub}</div>
          </div>
        </div>
        <div className="thirdcolcontainer">
          <div>
            <img
              src={maindata[2][6].url}
              height={50}
              width={50}
              style={{
                borderRadius: 100,
                // marginLeft: 150,
                // marginTop: 90,
                // position: "absolute",
              }}
            />
          </div>
          <div
            style={{
              marginLeft: 50,
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: 170,
              whiteSpace: "nowrap",
            }}
          >
            <div>{maindata[2][6].name}</div>
            {/* <div>{maindata[2][1].url}</div> */}
            <div>{maindata[2][6].sub}</div>
          </div>
        </div>
        <div className="thirdcolcontainer">
          <div>
            <img
              src={maindata[2][7].url}
              height={50}
              width={50}
              style={{
                borderRadius: 100,
                // marginLeft: 150,
                // marginTop: 90,
                // position: "absolute",
              }}
            />
          </div>
          <div
            style={{
              marginLeft: 50,
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: 170,
              whiteSpace: "nowrap",
            }}
          >
            <div>{maindata[2][7].name}</div>
            {/* <div>{maindata[2][1].url}</div> */}
            <div>{maindata[2][7].sub}</div>
          </div>
        </div>
        <div className="thirdcolcontainer">
          <div>
            <img
              src={maindata[2][8].url}
              height={50}
              width={50}
              style={{
                borderRadius: 100,
                // marginLeft: 150,
                // marginTop: 90,
                // position: "absolute",
              }}
            />
          </div>
          <div
            style={{
              marginLeft: 50,
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: 170,
              whiteSpace: "nowrap",
            }}
          >
            <div>{maindata[2][8].name}</div>
            {/* <div>{maindata[2][1].url}</div> */}
            <div>{maindata[2][8].sub}</div>
          </div>
        </div>
        <div className="thirdcolcontainer">
          <div>
            <img
              src={maindata[2][9].url}
              height={50}
              width={50}
              style={{
                borderRadius: 100,
                // marginLeft: 150,
                // marginTop: 90,
                // position: "absolute",
              }}
            />
          </div>
          <div
            style={{
              marginLeft: 50,
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: 170,
              whiteSpace: "nowrap",
            }}
          >
            <div>{maindata[2][9].name}</div>
            {/* <div>{maindata[2][1].url}</div> */}
            <div>{maindata[2][9].sub}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChannelDetails;
