import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import CommentList from './CommentList';

class App extends React.Component {
  state = { videos: [], selectedVideo: null, comments: [] }

  componentDidMount(){
    this.onTermSubmit('buildings');
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
    console.log(response);
    console.log(response.data.items[0].id.videoId);
    const responseActivities = await youtube.get('/commentThreads', {
      params: {
        videoId: response.data.items[0].id.videoId
      }
    });
    responseActivities.data.items.forEach(
      (e) => {
        console.log(e.snippet)
        console.log(e.snippet.topLevelComment.snippet.textDisplay)
      }
    )
    this.setState({
      comments: responseActivities.data.items
    });
  }


  onVideoSelect = video => {
    this.setState({ selectedVideo: video})
  }
  render(){
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
              <CommentList
                comments={this.state.comments}
              />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
