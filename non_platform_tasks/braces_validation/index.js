export default function valid_arr(braces) {
    const edict_arr = [['[', ']'], ['(', ')'], ['{', '}'],];
    const chars = braces.split('');
    const stuck = [];
    for (let i = 0; i < chars.length; ++i) {
        for (let e = 0; e < edict_arr.length; ++e) {
            if (chars[i] === edict_arr[e][0]) {
                stuck.push(chars[i]);
            } else if (chars[i] === edict_arr[e][1]) {
                const prev = stuck.pop();
                if (edict_arr[e][0] !== prev) return false;
            }
        }
    }
    if (stuck.length > 0) return false;
    return true;
}

function revert_object(obj) {
    const res = Object.create(null);
    for (e in obj) res[obj[e]] = e;
    return res;
}

function valid_map(braces) {
    const edict_map = { '[': ']', '(': ')', '{': '}', };
    const edict_map_revert = revert_object(edict_map);

    const chars = braces.split('');
    const stuck = [];
    for (let i = 0; i < chars.length; ++i) {
        if (edict_map[chars[i]] !== undefined) {
            stuck.push(chars[i]);
        } else {
            // check proper symbols
            if (edict_map_revert[chars[i]] === undefined) continue;
            const prev = stuck.pop();
            if (chars[i] !== edict_map[prev]) return false;
        }
    }
    if (stuck.length > 0) return false;
    return true;
}