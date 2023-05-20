import React, { useState } from "react";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";

const ProductDataContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  display: inline-block;
  position: relative;
  justify-content: center;
`;

const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  grid-gap: 24px;
  list-style: none;
`;

const Card = styled.li`
  flex-direction: column;
`;

const ImgStyle = styled.img`
  width: 264px;
  height: 210px;
  object-fit: fill;
  border-radius: 10px;
  flex-grow: 0;
  z-index: 1;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
`;
const CardInfoFirst = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CardInfoSecond = styled.div`
  justify-content: flex-end;
`;

const BrandSection = styled.span`
  font-weight: 700;
`;
const Title = styled.span`
  font-weight: 700;
`;

const InterestedCustomer = styled.span`
  font-weight: 500;
`;

const Discount = styled.span`
  color: #452cdd;
  font-weight: 800;
`;
const Price = styled.span`
  display: flex;
  justify-content: end;
  font-weight: 400;
`;
const Follower = styled.span`
  display: flex;
  justify-content: end;
  font-weight: 400;
`;

export const Brand = "Brand";
export const Product = "Product";
export const Category = "Category";
export const Exhibition = "Exhibition";
export const ProductData = ({ products }) => {
  const [isLoading, setIsLoading] = useState(false);

  const clickLoading = () => {
    setIsLoading();
  };
  return (
    <ProductDataContainer>
      {isLoading ? (
        <div className="container">
          <ClipLoader
            color="#f88c6b"
            loading={isLoading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <CardList className="card-list">
          {products.map((el) => (
            <Card key={`product${el.id}`}>
              <Container>
                <ImgStyle
                  className="card-image"
                  src={el.type === Brand ? el.brand_image_url : el.image_url}
                  alt={el.title}
                />
              </Container>
              <CardInfo>
                <CardInfoFirst>
                  {el.type === Brand && (
                    <>
                      <BrandSection>{el.brand_name}</BrandSection>
                      <InterestedCustomer>관심고객수</InterestedCustomer>
                    </>
                  )}
                  {[Product, Category, Exhibition].includes(el.type) && (
                    <Title>
                      {el.type === Category && "# "}
                      {el.title}
                    </Title>
                  )}
                  {el.type === Product && (
                    <Discount>{el.discountPercentage}%</Discount>
                  )}
                </CardInfoFirst>
                <CardInfoSecond>
                  {el.type === Product && (
                    <Price>
                      {el.price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      원
                    </Price>
                  )}
                  {el.type === Brand && (
                    <Follower>{el.follower.toLocaleString()}명</Follower>
                  )}
                  {el.type === Exhibition && <span>{el.sub_title}</span>}
                </CardInfoSecond>
              </CardInfo>
            </Card>
          ))}
        </CardList>
      )}
    </ProductDataContainer>
  );
};

export default ProductData;
