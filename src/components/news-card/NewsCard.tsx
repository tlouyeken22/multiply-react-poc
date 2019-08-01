import React from 'react';
import { BlogCard, CardContainer, CardHeader, CardContent, ButtonContainer } from './styles';
import { Button } from '@material-ui/core';


interface IProps {
    newsArticles: any
}

const NewsCard: React.FC<IProps> = ({ newsArticles }) => {
    const dummyAuther = "Unknown Auther";
    const dummyDescription = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
     printer took a galley of type and scrambled it to make a type specimen book. It has survived not 
     only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`

    return (
        <>
            {newsArticles.map((article: any, key: any) =>
                <BlogCard key={key}>
                    <img
                        alt="Multiply"
                        width="350px"
                        height="200px"
                        src={article.urlToImage}
                        style={{
                            borderTopRightRadius: "5px",
                            borderTopLeftRadius: "5px"
                        }}
                    />
                    <CardContainer>
                        <CardHeader>{article.author || dummyAuther}</CardHeader>
                        <CardContent>
                            <div dangerouslySetInnerHTML={{ __html: article.description } || dummyDescription} />
                        </CardContent>
                    </CardContainer>
                    <ButtonContainer>
                        <Button size="small" color="secondary" onClick={() => window.open(article.url, "_blank")}> Read more</Button>
                    </ButtonContainer>
                </BlogCard>
            )
            }
        </>
    )
}

export default NewsCard;