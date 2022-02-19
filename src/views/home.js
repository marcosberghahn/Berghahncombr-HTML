import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import OutlineGrayButton from '../components/outline-gray-button'
import FeatureCard from '../components/feature-card'
import OutlineBlackButton from '../components/outline-black-button'
import ListItem from '../components/list-item'
import Footer from '../components/footer'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Home - Berghahn.com.br</title>
        <meta
          name="description"
          content="Products That Move Humanity Forward"
        />
        <meta property="og:title" content="Home - Berghahn.com.br" />
        <meta
          property="og:description"
          content="Products That Move Humanity Forward"
        />
      </Helmet>
      <Header></Header>
      <div className={styles['Hero']}>
        <div className={styles['container01']}>
          <div className={styles['Card']}>
            <h1
              className={` ${styles['text']} ${projectStyles['headingOne']} `}
            >
              Products that move humanity forward
            </h1>
            <span className={` ${styles['text01']} ${projectStyles['lead']} `}>
              <span>
                We help purpose-driven businesses connect deeply with their
                public.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <div className={styles['container02']}>
              <div className={styles['container03']}>
                <PrimaryPinkButton button="contact us"></PrimaryPinkButton>
              </div>
              <OutlineGrayButton button="read more"></OutlineGrayButton>
            </div>
            <div className={styles['container04']}>
              <img
                alt="image"
                src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-pinterest.svg"
                className={styles['image']}
              />
              <img
                alt="image"
                src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-netflix.svg"
                className={styles['image01']}
              />
              <img
                alt="image"
                src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-coinbase.svg"
                className={styles['image02']}
              />
              <img
                alt="image"
                src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-nasa.svg"
                className={styles['image03']}
              />
            </div>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/curved6-1500h.jpg"
        className={styles['image04']}
      />
      <section className={styles['Features']}>
        <FeatureCard
          text="Choose the best design system for your next product."
          title="Components"
          image_src="/playground_assets/cube1.svg"
        ></FeatureCard>
        <FeatureCard image_src="/playground_assets/person1.svg"></FeatureCard>
        <FeatureCard
          text="Make your code easier to maintain using variables."
          title="Less Code"
          image_src="/playground_assets/rocket1.svg"
        ></FeatureCard>
        <FeatureCard
          text="This design system is fully supported on any device."
          title="Fully Responsive"
          image_src="/playground_assets/credit%20card1.svg"
        ></FeatureCard>
      </section>
      <section className={styles['container05']}>
        <div className={styles['container06']}>
          <h1
            className={` ${styles['text03']} ${projectStyles['headingOne']} `}
          >
            <span className={styles['text04']}>From nothing to something</span>
          </h1>
          <span className={styles['text05']}>
            <span className={styles['text06']}>
              The highest status people in human history are those that asked
              for nothing and gave everything
            </span>
          </span>
        </div>
        <div className={styles['container07']}>
          <div className={styles['container08']}>
            <img
              alt="image"
              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/laptop.jpg"
              className={styles['image05']}
            />
            <span className={` ${styles['text07']} ${projectStyles['small']} `}>
              <span className={styles['text08']}>
                &quot;Over the span of the satellite record, Arctic sea ice has
                been declining significantly, while sea ice in the Antarctichas
                increased very slightly&quot;
              </span>
              <br></br>
              <span className={styles['text10']}>-NOAA</span>
            </span>
            <div className={styles['container09']}>
              <img
                alt="image"
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/coding.jpg"
                className={styles['image06']}
              />
            </div>
          </div>
          <div className={styles['container10']}>
            <img
              alt="image"
              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/tasks.jpg"
              className={styles['image07']}
            />
            <div className={styles['container11']}>
              <h3 className={projectStyles['headingTwo']}>
                <span className={styles['text12']}>
                  So what does the new record for the lowest level of winter ice
                  actually mean
                </span>
              </h3>
              <p>
                <br></br>
                <span className={styles['text14']}>
                  The Arctic Ocean freezes every winter and much of the sea-ice
                  then thaws every summer, and that process will continue
                  whatever happens with climate change. Even if the Arctic
                  continues to be one of the fastest-warming regions of the
                  world, it will always be plunged into bitterly cold polar dark
                  every winter. And year-by-year, for all kinds of natural
                  reasons, thereâs huge variety of the state of the ice.
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span className={styles['text17']}>
                  For a start, it does not automatically follow that a record
                  amount of ice will melt this summer. More important for
                  determining the size of the annual thaw is the state of the
                  weather as the midnight sun approaches and temperatures rise.
                  But over the more than 30 years of satellite records,
                  scientists have observed a clear pattern of decline,
                  decade-by-decade.
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span className={styles['text20']}>
                  The Arctic Ocean freezes every winter and much of the sea-ice
                  then thaws every summer, and that process will continue
                  whatever happens with climate change. Even if the Arctic
                  continues to be one of the fastest-warming regions of the
                  world, it will always be plunged into bitterly cold polar dark
                  every winter. And year-by-year, for all kinds of natural
                  reasons, thereâs huge variety of the state of the ice.
                </span>
                <br></br>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles['Testimonials']}>
        <div className={styles['container12']}>
          <div className={styles['container13']}>
            <div className={styles['container14']}>
              <h2
                className={` ${styles['text21']} ${projectStyles['headingOne']} `}
              >
                Work with us
              </h2>
              <p className={` ${styles['text22']} ${projectStyles['lead']} `}>
                <span className={styles['text23']}>
                  Whatever your qualification is - we got you!
                </span>
              </p>
              <p className={` ${styles['text24']} ${projectStyles['body']} `}>
                <span className={styles['text25']}>
                  &quot;Take up one idea. Make that one idea your life - think
                  of it, dream of it, live on that idea. Let the brain, muscles,
                  nerves, every part of your body, be full of that idea, and
                  just leave every other idea alone. This is the way to success.
                  A single rose can be my garden... a single friend, my
                  world.&quot;
                </span>
              </p>
              <p className={styles['text26']}>Mark Jojansen</p>
              <p className={` ${styles['text27']} ${projectStyles['small']} `}>
                Project manager, Atlassian
              </p>
              <div className={styles['container15']}>
                <img
                  alt="image"
                  src="/playground_assets/team-4-200h.jpg"
                  className={styles['image08']}
                />
                <div className={styles['container16']}></div>
                <img
                  alt="image"
                  src="/playground_assets/team-3-200h.jpg"
                  className={styles['image09']}
                />
                <div className={styles['container17']}></div>
                <img
                  alt="image"
                  src="/playground_assets/team-2-200h.jpg"
                  className={styles['image10']}
                />
              </div>
            </div>
          </div>
          <div className={styles['Logos']}>
            <div className={styles['container18']}>
              <div className={styles['container19']}>
                <div className={styles['container20']}>
                  <img
                    alt="image"
                    src="/playground_assets/logo-asana.svg"
                    className={styles['image11']}
                  />
                </div>
                <div className={styles['container21']}>
                  <img
                    alt="image"
                    src="/playground_assets/logo-slack.svg"
                    className={styles['image12']}
                  />
                </div>
                <div className={styles['container22']}>
                  <img
                    alt="image"
                    src="/playground_assets/logo-google-drive.svg"
                    className={styles['image13']}
                  />
                </div>
              </div>
              <div className={styles['container23']}>
                <div className={styles['container24']}>
                  <img
                    alt="image"
                    src="/playground_assets/logo-shopify.svg"
                    className={styles['image14']}
                  />
                </div>
                <div className={styles['container25']}>
                  <img
                    alt="image"
                    src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/small-logos/logo-apple.svg"
                    className={styles['image15']}
                  />
                </div>
                <div className={styles['container26']}>
                  <img
                    alt="image"
                    src="/playground_assets/logo-invision.svg"
                    className={styles['image16']}
                  />
                </div>
              </div>
              <div className={styles['container27']}>
                <div className={styles['container28']}>
                  <img
                    alt="image"
                    src="/playground_assets/logo-attlasian.svg"
                    className={styles['image17']}
                  />
                </div>
                <div className={styles['container29']}>
                  <img
                    alt="image"
                    src="/playground_assets/logo-weave.svg"
                    className={styles['image18']}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/bottom.svg"
          className={styles['BottomWaveImage']}
        />
        <img
          alt="image"
          src="/playground_assets/waves-white.svg"
          className={styles['image19']}
        />
        <img
          alt="image"
          src="/playground_assets/top.svg"
          className={styles['TopWaveImage']}
        />
      </section>
      <section className={styles['Contaier']}>
        <div className={styles['container30']}>
          <div className={styles['container31']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon']}>
              <path d="M363.722 722.052l41.298-57.816-45.254-45.256-57.818 41.296c-10.722-5.994-22.204-10.774-34.266-14.192l-11.682-70.084h-64l-11.68 70.086c-12.062 3.418-23.544 8.198-34.266 14.192l-57.818-41.298-45.256 45.256 41.298 57.816c-5.994 10.72-10.774 22.206-14.192 34.266l-70.086 11.682v64l70.086 11.682c3.418 12.060 8.198 23.544 14.192 34.266l-41.298 57.816 45.254 45.256 57.818-41.296c10.722 5.994 22.204 10.774 34.266 14.192l11.682 70.084h64l11.68-70.086c12.062-3.418 23.544-8.198 34.266-14.192l57.818 41.296 45.254-45.256-41.298-57.816c5.994-10.72 10.774-22.206 14.192-34.266l70.088-11.68v-64l-70.086-11.682c-3.418-12.060-8.198-23.544-14.192-34.266zM224 864c-35.348 0-64-28.654-64-64s28.652-64 64-64 64 28.654 64 64-28.652 64-64 64zM1024 384v-64l-67.382-12.25c-1.242-8.046-2.832-15.978-4.724-23.79l57.558-37.1-24.492-59.128-66.944 14.468c-4.214-6.91-8.726-13.62-13.492-20.13l39.006-56.342-45.256-45.254-56.342 39.006c-6.512-4.766-13.22-9.276-20.13-13.494l14.468-66.944-59.128-24.494-37.1 57.558c-7.812-1.892-15.744-3.482-23.79-4.724l-12.252-67.382h-64l-12.252 67.382c-8.046 1.242-15.976 2.832-23.79 4.724l-37.098-57.558-59.128 24.492 14.468 66.944c-6.91 4.216-13.62 8.728-20.13 13.494l-56.342-39.006-45.254 45.254 39.006 56.342c-4.766 6.51-9.278 13.22-13.494 20.13l-66.944-14.468-24.492 59.128 57.558 37.1c-1.892 7.812-3.482 15.742-4.724 23.79l-67.384 12.252v64l67.382 12.25c1.242 8.046 2.832 15.978 4.724 23.79l-57.558 37.1 24.492 59.128 66.944-14.468c4.216 6.91 8.728 13.618 13.494 20.13l-39.006 56.342 45.254 45.256 56.342-39.006c6.51 4.766 13.22 9.276 20.13 13.492l-14.468 66.944 59.128 24.492 37.102-57.558c7.81 1.892 15.742 3.482 23.788 4.724l12.252 67.384h64l12.252-67.382c8.044-1.242 15.976-2.832 23.79-4.724l37.1 57.558 59.128-24.492-14.468-66.944c6.91-4.216 13.62-8.726 20.13-13.492l56.342 39.006 45.256-45.256-39.006-56.342c4.766-6.512 9.276-13.22 13.492-20.13l66.944 14.468 24.492-59.13-57.558-37.1c1.892-7.812 3.482-15.742 4.724-23.79l67.382-12.25zM672 491.2c-76.878 0-139.2-62.322-139.2-139.2s62.32-139.2 139.2-139.2 139.2 62.322 139.2 139.2c0 76.878-62.32 139.2-139.2 139.2z"></path>
            </svg>
          </div>
          <h2
            className={` ${styles['text28']} ${projectStyles['headingTwo']} `}
          >
            <span className={styles['text29']}>Beware The Components</span>
          </h2>
          <h3
            className={` ${styles['text30']} ${projectStyles['headingTwo']} `}
          >
            <span className={styles['text31']}>How To Handle Them</span>
            <br></br>
          </h3>
          <span className={styles['text32']}>
            <span className={styles['text33']}>
              Weâre constantly trying to express ourselves and actualize our
              dreams. Don&apos;t stop.
            </span>
          </span>
        </div>
        <div className={styles['container32']}>
          <div className={styles['container33']}>
            <div className={styles['container34']}></div>
            <div className={styles['container35']}>
              <svg
                viewBox="0 0 987.4285714285713 1024"
                className={styles['icon2']}
              >
                <path d="M438.857 508.571l312 312c-79.429 80.571-190.286 130.286-312 130.286-242.286 0-438.857-196.571-438.857-438.857s196.571-438.857 438.857-438.857v435.429zM545.714 512h441.714c0 121.714-49.714 232.571-130.286 312zM950.857 438.857h-438.857v-438.857c242.286 0 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <h1
                className={` ${styles['text34']} ${projectStyles['headingOne']} `}
              >
                Search and Discover!
              </h1>
              <span className={styles['text35']}>
                <span>Website visitors</span>
                <span></span>
              </span>
              <OutlineBlackButton button="get started"></OutlineBlackButton>
            </div>
          </div>
          <div className={styles['container36']}>
            <ListItem></ListItem>
            <ListItem
              title="2. Performance Analyze"
              description="Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports."
            ></ListItem>
            <ListItem
              title="3. Social Conversions"
              description="Track actions taken on your website that originated from social, and understand the impact on your bottom line."
            ></ListItem>
          </div>
        </div>
        <div className={styles['Divider']}></div>
        <div className={styles['container37']}>
          <div className={styles['container38']}>
            <ListItem
              title="1. Always in Sync"
              description="No matter where you are, Trello stays in sync across all of your devices."
            ></ListItem>
            <ListItem
              title="2. Work With Any Team"
              description="Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports."
            ></ListItem>
            <ListItem
              title="3. A Productivity Platform"
              description="Integrate the apps your team already uses directly into your workflow."
            ></ListItem>
          </div>
          <div className={styles['container39']}>
            <div className={styles['container40']}></div>
            <div className={styles['container41']}>
              <svg viewBox="0 0 1152 1024" className={styles['icon4']}>
                <path d="M1088 901.166c0 45.5 26.028 84.908 64 104.184v15.938c-10.626 1.454-21.472 2.224-32.5 2.224-68.008 0-129.348-28.528-172.722-74.264-26.222 6.982-54.002 10.752-82.778 10.752-159.058 0-288-114.616-288-256s128.942-256 288-256c159.058 0 288 114.616 288 256 0 55.348-19.764 106.592-53.356 148.466-6.824 14.824-10.644 31.312-10.644 48.7zM512 0c278.458 0 504.992 180.614 511.836 405.52-49.182-21.92-103.586-33.52-159.836-33.52-95.56 0-185.816 33.446-254.138 94.178-70.846 62.972-109.862 147.434-109.862 237.822 0 44.672 9.544 87.888 27.736 127.788-5.228 0.126-10.468 0.212-15.736 0.212-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z"></path>
              </svg>
              <h1
                className={` ${styles['text38']} ${projectStyles['headingOne']} `}
              >
                Talk and Meet!
              </h1>
              <span className={styles['text39']}>
                <span>Website visitors</span>
                <span></span>
              </span>
              <OutlineBlackButton button="get started"></OutlineBlackButton>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default Home
