import type { Route } from "../../.react-router/types/app/routes/+types/home.ts";
import { Link } from "react-router";
import thumb_is from "/thumb_is.png";
import thumb_pn from "/thumb_pn.png";
import thumb_tr from "/thumb_tr.png";
import ico from "/home.ico";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "courtesycalling" },
    { name: "description", content: "courtesycalling's website" },
  ];
}

export default function Home() {
  return (
    <div className="flexbox-vertical parent">
			<h1>
				<img src={ico} className="header-image"/>
				courtesycalling's website
				<img src={ico} className="header-image"/>
			</h1>
			<div className="flexbox-vertical">
				<h2>Social media</h2>
				<div className="flexbox-horizontal">
					<a href="https://courtesycalling.tumblr.com">tumblr</a>
					<a href="https://bsky.app/profile/courtesy.bsky.social">bsky</a>
					<a href="https://courtesy.itch.io">itch.io</a>
					<a href="https://twitter.com/thetruecourtesy" className="struck">twitter (inactive)</a>
				</div>
			</div>
			<div className="flexbox-vertical">
				<h2>Projects</h2>
				<div><Link to="https://aperturelogo.courtesycalling.com">Aperture Logo Generator</Link></div>
			</div>
			<div className="flexbox-vertical">
				<h2>Games</h2>
				<table>
					<tbody>
						<tr>
							<td>
								<h3>Ingolstadt</h3>
								<ul>
									<li>Create a monster.</li>
									<li>A few minutes long.</li>
									<li>Created with sublimehouse and Wynton Yang.</li>
									<li>Programmed by me.</li>
									<li><a href="https://sublimehouse.itch.io/ingolstadt">Play in browser or download for Windows on itch.io</a></li>
								</ul>
							</td>
							<td>
								<img src={thumb_is} alt="Ingolstadt cover art" className="cover-image"/>
							</td>
						</tr>
						<tr>
							<td>
								<h3>Pbouxhkiir Night on the Primox Alpha</h3>
								<ul>
									<li>Wager the fate of the Earth in a friendly game of Pbouxhkiir.</li>
									<li>Several minutes long.</li>
									<li>Made with Wynton Yang and computeruser for Pizza Jam 10.</li>
									<li>Winner of Pizza Jam 10!</li>
									<li>Art, co-writing, and some programming by me.</li>
									<li><a href="https://courtesy.itch.io/pbouxhkiir-night">Play in browser on itch.io</a></li>
								</ul>
							</td>
							<td>
								<img src={thumb_pn} alt="Pbouxhkiir Night cover art" className="cover-image"/>
							</td>
						</tr>
						<tr>
							<td>
								<h3>Transmission Received</h3>
								<ul>
									<li>Decode an alien transmission.</li>
									<li>Less than a minute long.</li>
									<li>Made with computeruser and Wynton Yang for the No Words Jam 2023.</li>
									<li>Art and some programming by me.</li>
									<li><a href="https://computeruser.itch.io/transmission-received">Play in browser on itch.io</a></li>
								</ul>
							</td>
							<td>
								<img src={thumb_tr} alt="Transmission Received cover art" className="cover-image"/>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="footer-image"></div>
		</div>
  );
}
