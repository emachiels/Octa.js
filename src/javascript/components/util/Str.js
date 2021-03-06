class Str {

    /**
     * Returns whether the given argument is a string
     *
     * @param {*} str The to be checked argument
     * @returns {boolean}
     */
    static isString(str) {
        return typeof str === "string";
    }

    /**
     * Converts a string to a camelCased word
     * @param {String} string The string to convert
     * @return {string}
     */
    static toCamelCase(string) {
        let words = string.toLowerCase().split(" ");

        for (let i = 1; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }

        return words.join("");
    }

    /**
     * Returns the give string with a capitalized first letter
     * @param {String} string
     * @returns String
     */
    static ucFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    /**
     * Returns the given string as an object
     *
     * @return {Object}
     */
    static toObject(string) {
        string = string.replace(/'/g, "\"");
        try {
            return JSON.parse(string);
        } catch (err) {
            return {};
        }
    }

    static toURI(object) {
        var encodedString = "";

        for (var prop in object) {
            if (object.hasOwnProperty(prop)) {
                if (encodedString.length > 0) {
                    encodedString += "&";
                }
                encodedString += encodeURI(prop + "=" + object[prop]);
            }
        }
        return encodedString;
    }
}

export default Str;
