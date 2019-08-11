import React,{ Component } from 'react';
import request from 'graphql-request';
import Blog from './Blog/Blog';
import './Bloglist.css';

const API_ENDPOINT = 'https://api-euwest.graphcms.com/v1/cjz6gj52c16tu01g7cpyy8g4b/master';

const query = `
query contentView_b330a48230824698a0211b6cb98eca76($first: Int, $skip: Int, $where: ArticleContainerFormApiWhereInput, $orderBy: ArticleContainerFormApiOrderByInput) {
    contentView_content_b330a48230824698a0211b6cb98eca76: articleContainerFormApisConnection(first: $first, skip: $skip, where: $where, orderBy: $orderBy) {
      edges {
        node {
          status
          updatedAt
          createdAt
          id
          articleTitle
          articleImage {
            status
            updatedAt
            createdAt
            id
            handle
            fileName
            height
            width
            size
            mimeType
          }
          articleContent
          blogFieldModel {
            id
            fieldName
          }
        }
      }
    }
    contentView_content_b330a48230824698a0211b6cb98eca76Count: articleContainerFormApisConnection(where: $where) {
      aggregate {
        count
      }
    }
  }  
  `
class Bloglist extends Component {
    state = {
        data: [ ]
    }
    async componentDidMount() {
        const data = await request(API_ENDPOINT,query);
        const updatedData = data.contentView_content_b330a48230824698a0211b6cb98eca76.edges;
        this.setState({data:updatedData});
        console.log(this.state.data);
    }
    render() {
        const article = this.state.data.map( singleArticle => {
            return <Blog
            key={singleArticle.node.id}
            title={singleArticle.node.articleTitle}
            content={singleArticle.node.articleContent}
            imgPath={singleArticle.node.articleImage.handle}
            field={singleArticle.node.blogFieldModel.fieldName} />;
        });
        return(
            <div className="Bloglist">
                {article}
            </div>
        );
    }
}

export default Bloglist;