/* errors.js --- Custom errors for ParseCSS library functions
 Commentary:
 Code:
 */

function CSSPropertySyntaxError(message) {
    /**
     * @property {String} name - Name for the type of error.
     * @constant
     * @public
     */
    this.name = 'CSSPropertySyntaxError';

    /**
     * @property {String} message - Human-readable description of the error.
     * @constant
     * @public
     */
    this.message = message || 'The CSS property doesn’t have a valid syntax.';
    this.stack = (new Error()).stack;
}
CSSPropertySyntaxError.prototype = new Error;

/*  errors.js ends here */
