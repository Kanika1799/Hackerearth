import React from "react";
import "antd/dist/antd.css";
import { Card, Rate } from "antd";
import styled from "styled-components";
import "./index.css";

const Title = styled.h1`
  font-size: 1.2em;
  font-weight: bolder;
  color: #0c1b33;
`;
const TomatoTitle = styled(Title)`
  color: #896c74;

  font-size: 1em;
`;
const LinkTitle = styled(Title)`
  color: #212738;

  font-size: 0.7em;
`;

export default function Song({ song }) {
  return (
    <div>
      {/* <a target="_blank" href={song.previewUrl} style={{ marginLeft: 70 }}> */}
      <Card
        hoverable
        className="SongCard"
        style={{ width: 350, marginLeft: 110, marginTop: 50, height: 150 }}
      >
        <Title>{song.title}</Title>
        <TomatoTitle>{song.authors}</TomatoTitle>
        <LinkTitle>
          <Rate allowHalf disabled value={song.average_rating} />
        </LinkTitle>
      </Card>

      {/* */}
    </div>
  );
}

// {"wrapperType":"track", "kind":"song", "artistId":315302014, "collectionId":1181067464, "trackId":1181067853, "artistName":"TrancEye", "collectionName":"Grotesque 250", "trackName":"Atum", "collectionCensoredName":"Grotesque 250", "trackCensoredName":"Atum (Radio Edit)", "collectionArtistId":743810495, "collectionArtistName":"RAM, Sean Tyas & Vini Vici", "collectionArtistViewUrl":"https://music.apple.com/us/artist/ram/743810495?uo=4", "artistViewUrl":"https://music.apple.com/us/artist/tranceye/315302014?uo=4", "collectionViewUrl":"https://music.apple.com/us/album/atum-radio-edit/1181067464?i=1181067853&uo=4", "trackViewUrl":"https://music.apple.com/us/album/atum-radio-edit/1181067464?i=1181067853&uo=4", "previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview71/v4/34/1b/b9/341bb908-6136-680b-dbd0-381a4c70a353/mzaf_5670908791475061518.plus.aac.p.m4a", "artworkUrl30":"https://is2-ssl.mzstatic.com/image/thumb/Music71/v4/17/2e/39/172e39b4-291c-5843-ee2b-789d5ead2b6e/source/30x30bb.jpg", "artworkUrl60":"https://is2-ssl.mzstatic.com/image/thumb/Music71/v4/17/2e/39/172e39b4-291c-5843-ee2b-789d5ead2b6e/source/60x60bb.jpg", "artworkUrl100":"https://is2-ssl.mzstatic.com/image/thumb/Music71/v4/17/2e/39/172e39b4-291c-5843-ee2b-789d5ead2b6e/source/100x100bb.jpg", "collectionPrice":9.99, "trackPrice":0.99, "releaseDate":"2016-12-12T12:00:00Z", "collectionExplicitness":"notExplicit", "trackExplicitness":"notExplicit", "discCount":1, "discNumber":1, "trackCount":51, "trackNumber":14, "trackTimeMillis":205500, "country":"USA", "currency":"USD", "primaryGenreName":"Trance", "isStreamable":true}
