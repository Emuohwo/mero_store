import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavigationList from '../../components/shared/navigation/NavigationList';
import SiteFeatures from '../../components/partials/homepage/autopart/SiteFeatures';
import AutopartPromotions from '../../components/partials/homepage/autopart/AutopartPromotions';
import AutopartCategories from '../../components/partials/homepage/autopart/AutopartCategories';
import AutopartRecommendForYou from '../../components/partials/homepage/autopart/AutopartRecommendForYou';
import AutopartBestSaleBrand from '../../components/partials/homepage/autopart/AutopartBestSaleBrand';
import ClientSay from '../../components/partials/commons/ClientSay';
import AutopartPromotions2 from '../../components/partials/homepage/autopart/AutopartPromotions2';
import AutopartDealHot from '../../components/partials/homepage/autopart/AutopartDealHot';
import AutopartBanner from '../../components/partials/homepage/autopart/AutopartBanner';
import HeaderAutoPart from '../../components/shared/headers/HeaderAutoPart';
import HeaderMobileAutopart from '../../components/shared/headers/HeaderMobileAutopart';
import SubscribePopup from '../../components/shared/SubscribePopup';
import FooterAutopart from '../../components/shared/footers/FooterAutopart';
import { getCollections } from '../../store/collection/action';
import SwicherDemo from '~/components/shared/switcher-demo/SwitcherDemo';
import { switchDemoPanel } from '~/store/app/action';
class HomeAutopartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subscribe: false,
        };
    }

    static async getInitialProps(ctx) {
        return { query: ctx.query };
    }

    componentDidMount() {
        const { query } = this.props;
        if (query) {
            const collectionsSlug = ['autopart-recommend-products'];
            this.props.dispatch(getCollections(collectionsSlug));
            this.props.dispatch(switchDemoPanel(false));
        }
        setTimeout(() => {
            this.setState({ subscribe: false });
        }, 10000);
    }

    render() {
        const { subscribe } = this.state;
        return (
            <div className="site-content">
                <HeaderAutoPart />
                <HeaderMobileAutopart />
                <NavigationList />
                <SubscribePopup active={subscribe} />
                <main id="homepage-2">
                    <AutopartBanner />
                    <AutopartCategories />
                    <AutopartPromotions />
                    <AutopartRecommendForYou collectionSlug="autopart-recommend-products" />
                    <AutopartDealHot collectionSlug="autopart-recommend-products" />
                    <AutopartPromotions2 />
                    <AutopartBestSaleBrand />
                    <ClientSay />
                    <SiteFeatures />
                    <FooterAutopart />
                </main>
                <SwicherDemo />
            </div>
        );
    }
}

export default connect()(HomeAutopartPage);
