let text = "In nova fert animus mutatas dicere formas corpora; di, coeptis (nam vos mutastis et illas) adspirate meis primaque ab origine mundiad mea perpetuum deducite tempora carmen! Ante mare et terras et quod tegit omnia caelum unus erat toto naturae vultus in orbe, quem dixere chaos: rudis indigestaque moles nec quicquam nisi pondus iners congestaque eodem non bene iunctarum discordia semina rerum. nullus adhuc mundo praebebat lumina Titan, nec nova crescendo reparabat cornua Phoebe, nec circumfuso pendebat in aere tellus ponderibus librata suis, nec bracchia longo margine terrarum porrexerat Amphitrite; utque erat et tellus illic et pontus et aer, sic erat instabilis tellus, innabilis unda, lucis egens aer; nulli sua forma manebat, obstabatque aliis aliud, quia corpore in uno frigida pugnabant calidis, umentia siccis, mollia cum duris, sine pondere, habentia pondus.";


/**
 * Problem 1: 
 * 
 * Given this text, find and count the amount of every word occurence.
 * 
 * example:
 * count(text) =>
 * 
 * {
 *    "in": 3,
 *    "nova": 5,
 *     ...
 * }
 * 
 * Tip:
 * - Before you start counting, you might want to use .toLowerCase() to make all your words the same case
 */


/**
 * Problem 2:
 * 
 * Given a string of repeating numbers ( ex. aaaabbbcccaaaa )
 * translate it into a string that compresses it (ex. 'a4b3c3a4' )
 * 
 * ex.
 * compress('aabccca') => 'a2b1c3a1'
 * 
 * Tip:
 * - What data are we concerned with keeping track of as we go through the string?
 */

 /**
 * 1. New String
 * 2. Loop over it
 * 3. Keep track letter
 * 4. Keep track of how many times that letter shows up
 * 5. Append the letter and the number to the new
 */