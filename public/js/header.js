( function( w, d ){
    function He() {
        this.$he = d.getElementById( 'header' );
    }
    He.prototype = {
        init : function() {
            this.event( this );
        },
        event : function( _this ) {
            w.onscroll = function() {
                _this.fun();
            }
        },
        fun : function() {
            this.$he.style.boxShadow = '0 1px 10px 0 #e6e6e6';
        }
    };
    w.onload = function() {
        var he = new He();
        he.init();
    }
} )( window, document );