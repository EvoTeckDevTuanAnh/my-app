import { SearchOutlined } from '@ant-design/icons';
import { Card, Carousel, Col, Divider, Input, Menu, Row } from 'antd';
import { FC, useState } from 'react';
import './home.scss';
const { Meta } = Card;
interface HomeScreenProps { }
const HomeScreen: FC<HomeScreenProps> = () => {
  const [newProducts, setNewProducts] = useState([
    {
      name: "VALENTINE'S DAY 2023: The Vertex ZERO Bone Heart on Wall (S), Geometric Preserved Moss Terrarium, 01 Limited Edition Release by TerraLiving ",

    }
  ]);
  const onClick = (e: any) => {
    console.log('click ', e);
  };

  return (
    <div className='HomeScreen'>
      <section id='present'>
        <img className='bg-img' src="https://static.wixstatic.com/media/8932bd_3b8f66a29c70451e85cdc8a487bd7d87~mv2.jpg/v1/crop/x_0,y_201,w_1440,h_745/fill/w_1221,h_631,al_c,q_90,enc_auto/17912246197659250.jpg" alt="https://static.wixstatic.com/media/8932bd_3b8f66a29c70451e85cdc8a487bd7d87~mv2.jpg/v1/crop/x_0,y_201,w_1440,h_745/fill/w_1221,h_631,al_c,q_90,enc_auto/17912246197659250.jpg" />
        <div className='card'>
          <Card title="TERRARIUMS & PALUDARIUMS" bordered={false}>
            <p>a vivarium for smaller land animals, especially reptiles, amphibians, or terrestrial invertebrates, typically in the form of a glass-fronted case.</p>
          </Card>
        </div>
      </section>
      <section id='about'>
        <Divider> <p className='title-about'>
          About us
        </p></Divider>

        <Carousel dotPosition={"left"}>
          <div className='box'>
            <img src="https://static.wixstatic.com/media/8932bd_da1003966d0741d7bbf7d1e28dbfa6cc~mv2.jpg/v1/fill/w_1221,h_814,al_c,q_90,enc_auto/TERRALIVING%20BIOART%20BIOARCHITECTURE.jpg" alt="https://static.wixstatic.com/media/8932bd_da1003966d0741d7bbf7d1e28dbfa6cc~mv2.jpg/v1/fill/w_1221,h_814,al_c,q_90,enc_auto/TERRALIVING%20BIOART%20BIOARCHITECTURE.jpg" />
            <div className='content'>
              <p className='title'>
                BioArt . Bioarchitecture . Biomorphism
              </p>
              <p className='detail'>Through Bioarchitecture & Biomorphism, we apply the complexity and immense interconnectedness of the scientific mechanisms into our work.
                These designs contribute to our Botanical Sculptures that allow our clients to feel ever more connected to their surrounding living space, from a desktop environment to a bedroom.</p>
            </div>
          </div>
          <div className='box'>
            <img src="https://static.wixstatic.com/media/8932bd_aa578ae7e43a419b805bae8206628638~mv2.jpg/v1/crop/x_0,y_276,w_5994,h_3492/fill/w_1221,h_710,al_c,q_90,enc_auto/DSC08664_ZERO%20MOSS.jpg" alt="https://static.wixstatic.com/media/8932bd_aa578ae7e43a419b805bae8206628638~mv2.jpg/v1/crop/x_0,y_276,w_5994,h_3492/fill/w_1221,h_710,al_c,q_90,enc_auto/DSC08664_ZERO%20MOSS.jpg" />
            <div className='content'>
              <p className='title'>
                About ZERO MOSS
              </p>
              <p className='detail'>ZERO Moss is the primary plant material that we use for all our official botanical collections, sculptures & terrariums.
                Initially, we cultivate live moss in our in-door propagation center till its peak health. Then we preserve the moss to freeze its growth and cellular components.
                These preserved moss from our lab are known as ZERO Moss. They are 100% real plants that require no maintenance and look fresh for years.</p>
            </div>
          </div>
          <div className='box'>
            <img src="https://static.wixstatic.com/media/8932bd_e4d50f6b50564c378c858126bdac67f3~mv2.jpg/v1/fill/w_1221,h_814,al_c,q_90,enc_auto/moment_photo_1A3D9A2D.jpg" alt="https://static.wixstatic.com/media/8932bd_e4d50f6b50564c378c858126bdac67f3~mv2.jpg/v1/fill/w_1221,h_814,al_c,q_90,enc_auto/moment_photo_1A3D9A2D.jpg" />
            <div className='content'>
              <p className='title'>
                ZERO MOSS Care
              </p>
              <p className='detail'>Our ZERO Moss require virtually no care.
                Avoid long-term direct sunlight, extreme temperature, high humidity and water.</p>
            </div>
          </div>
          <div className='box'>
            <img src="https://static.wixstatic.com/media/8932bd_dfa72ed8ed354820a4c6ce2e6592a85c~mv2.jpg/v1/fill/w_1203,h_680,al_c,q_90,enc_auto/Vertex%20Voxarium%20Winter%20Memories%20Gallery%20TerraLiving%20NFT.jpg" alt="https://static.wixstatic.com/media/8932bd_dfa72ed8ed354820a4c6ce2e6592a85c~mv2.jpg/v1/fill/w_1203,h_680,al_c,q_90,enc_auto/Vertex%20Voxarium%20Winter%20Memories%20Gallery%20TerraLiving%20NFT.jpg" />
            <div className='content'>
              <p className='title'>
                The art of TerraLiving
              </p>
              <p className='detail'>Since 2015, "The Art of TerraLiving" is the dedication to our work and motivation to grow our art.
                Our pure art division covers traditional hand-drawn art and digital art that led us to exceptional projects and experiences, translating ideas into reality.
                We specialize in creating unique graphics and visual media that help us leave a lasting impression on our fans.
                The full virtual gallery for our digital art is coming soon.</p>
            </div>
          </div>
        </Carousel>
      </section>
      <section id='products'>
        <Divider> <p className='title-about'>
          Products
        </p></Divider>
        <div className="top-sell">
          <Menu
            onClick={onClick}
            style={{
              width: 256,
            }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            <div className="search-box ">
              <Input className='text-input' size="large" placeholder="large size" prefix={<SearchOutlined />} />
            </div>
            <Menu.Item>All</Menu.Item>
            <Menu.Item>Vertex Family</Menu.Item>
            <Menu.Item>Colony Series</Menu.Item>
            <Menu.Item>RF - Tree Moss Series</Menu.Item>
            <Menu.Item>Parametric Sculpture</Menu.Item>
            <Menu.Item>Organic Sculpture Series</Menu.Item>
            <Menu.Item>Desktop Moss Wall</Menu.Item>
            <Menu.Item>High-end Luxurious</Menu.Item>
            <Menu.Item>Herbarium series</Menu.Item>
            <Menu.Item>Rare & Unique Series</Menu.Item>
            <Menu.Item>TerraLight & Glass</Menu.Item>
            <Menu.Item>RF - var. Rhodobryum</Menu.Item>
            <Menu.Item>EcoCube Family</Menu.Item>
            <Menu.Item>Bryologist Collection</Menu.Item>
            <Menu.Item>Microcosm Collection</Menu.Item>
          </Menu>
          <div className='list-product'>
            <div className='new box'>
              <p className='title'>
                New Items
              </p>
              <div className='product'>
                <Row gutter={{ xs: 2, sm: 2, md: 2, lg: 2 }}>
                  <Col className="gutter-row" span={6}>
                    <div><Card
                      hoverable
                      style={{
                        width: 240,
                      }}
                      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                      <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card></div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div><Card
                      hoverable
                      style={{
                        width: 240,
                      }}
                      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                      <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card></div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className='trending'>
              <p className='title'>
                New Items
              </p>
              <div className='product'>
                <Row gutter={{ xs: 2, sm: 2, md: 2, lg: 2 }}>
                  <Col className="gutter-row" span={6}>
                    <div>col-6</div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div>col-6</div>
                  </Col>
                </Row>
              </div>
            </div>
            <div className='products'>
              <p className='title'>
                New Items
              </p>
              <div className='product'>
                <Row gutter={{ xs: 2, sm: 2, md: 2, lg: 2 }}>
                  <Col className="gutter-row" span={6}>
                    <div>col-6</div>
                  </Col>
                  <Col className="gutter-row" span={6}>
                    <div>col-6</div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
};

export default HomeScreen;
