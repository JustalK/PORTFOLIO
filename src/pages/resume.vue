<template>
	<div
		id="RESUME"
		ref="resume"
		:class="{unmounted: unmounted_parent, locked: locked}">
		<div>
			<components_links
				:invisible="invisible" />
			<components_menu
				:invisible="invisible"
				@back="back"
				@change_by_menu="change_by_menu" />
			<components_back
				:invisible="invisible"
				@back="back" />
			<h1>
				<components_text
					:text="title"
					:unmounted="unmounted"
					:invisible="invisible_text" />
			</h1>
			<components_text
				:text="description"
				:unmounted="unmounted"
				:invisible="invisible_text" />
			<ul
				class="options">
				<li
					v-for="option in options"
					:key="option.name"
					ref="options"
					:data-id="option.name"
					:class="{'options-option': true, 'options-option--active': selected_option._id === option._id }"
					@mouseover="hover_enter"
					@click="change_resume(option._id)">
					<span> {{ option.name }} </span>
				</li>
			</ul>
			<svg id="SVG_EFFECT">
				<defs>
					<filter id="wave">
						<feTurbulence
							ref="turbulence"
							type="fractalNoise"
							baseFrequency="1.1 1.1"
							numOctaves="1"
							result="warp" />
						<feDisplacementMap
							xChannelSelector="R"
							yChannelSelector="G"
							scale="80"
							in="SourceGraphic"
							in2="warpOffeset" />
					</filter>
				</defs>
			</svg>
			<iframe
				ref="iframe"
				:class="{invisible: invisible}"
				:src="'../libs/web/viewer.html?file=' + selected_option.filename" />
			<components_pubs 
				:invisible="invisible" />
		</div>
	</div>
</template>
<script>
import pubs from '../components/pubs';
import menu from '../components/main/menu';
import back from '../components/main/back';
import text from '../components/main/text';
import links from '../components/main/links';
import api from '../services/api';
import helper_navigation from '../helper/navigation.js';

export default {
	components: {
		components_text: text,
		components_pubs: pubs,
		components_back: back,
		components_menu: menu,
		components_links: links
	},
	data: () => {
		return {
			title: '',
			options: [{
				_id: 0,
				name: 'Design resume',
				filename: 'resume.pdf'
			}, {
				_id: 1,
				name: 'Classic english resume',
				filename: 'resume_en.pdf'
			}, {
				_id: 3,
				name: 'Classic french resume',
				filename: 'resume_fr.pdf'
			}],
			selected_option: {
				_id: 0,
				name: 'Design resume',
				filename: 'resume.pdf'
			},
			description: '',
			locked: false,
			invisible: true,
			invisible_text: true,
			unmounted_parent: false,
			unmounted: false
		};
	},
	async created() {
		const page = await this.get_page(this.$route.name);

		this.selected_option = this.options[0];

		if (page !== null) {
			this.update_page(page[0]);
		}

		await this.$nextTick();
		setTimeout(() => {
			this.invisible = false;
			this.invisible_text = false;
		}, 1);
	},
	methods: {
		change_by_menu(slug) {
			this.change_page_by_slug(slug);
		},
		back() {
			this.change_page_by_slug('home');
		},
		change_page_by_slug(slug) {
			this.unmounted_parent = true;
			this.locked = true;
			helper_navigation.change_page(this, slug);
		},
		async get_page(name) {
			return api.get_pages(name);
		},
		update_page(page) {
			this.title = page.title;
			this.description = page.description;
		},
		change_resume(_id) {
			this.selected_option = this.options.find((r) => r._id == _id);
		},
		hover_enter() {
			let vertical_frequency = 1.1;
			this.$refs.turbulence.setAttribute('baseFrequency', vertical_frequency + ' ' + vertical_frequency);
			const steps = 30;
			const interval = 10;
			for (let i = 0; i < steps; i++) {
				setTimeout(() => {
					vertical_frequency += 0.05;
					vertical_frequency = Math.min(vertical_frequency, 2.5);
					this.$refs.turbulence.setAttribute('baseFrequency', vertical_frequency + ' ' + vertical_frequency);
				}, i * interval);
			}
		}
	}
};
</script>
<style src="../assets/less/resume.less"></style>
