/*
 * Modify default order data when +order link is clicked.
 */
jQuery(document).ready(function() {
	// Check that we are on edit order page.
	if ( ! jQuery( '#pmpro_orders_nonce' ).length ) {
		return;
	}

	var urlParams = new URLSearchParams(window.location.search);
	if ( urlParams.has('pmproama') ) {
		// The +order link was used. Clear out anything that is order-specific.
		jQuery( '#user_id' ).val( urlParams.get('pmproama') );
		jQuery( '#discount_code_id' ).val( '0' );
		jQuery( '#subtotal' ).val( '' );
		jQuery( '#tax' ).val( '' );
		jQuery( '#couponamount' ).val( '' );
		jQuery( '#total' ).val( '' );
		jQuery( '#status' ).val( 'success' );
		jQuery( '#subscription_transaction_id' ).val( '' );
		jQuery( '#payment_transaction_id' ).val( '' );

		var date = new Date;
		jQuery( '#ts_month' ).val( date.getMonth() + 1 );
		jQuery( "input[name='ts_day']" ).val( date.getDate() );
		jQuery( "input[name='ts_year']" ).val( date.getFullYear() );
		jQuery( "input[name='ts_hour']" ).val( date.getHours() );
		jQuery( "input[name='ts_minute']" ).val( date.getMinutes() );
	}    
});
