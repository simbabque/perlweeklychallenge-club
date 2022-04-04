#!/usr/bin/env raku

use Prime::Factor;
use Test;

is-deeply ( 1..10)>>.&mobius, ( 1, -1, -1, 0, -1, 1, -1, 0,  0, 1);
is-deeply (11..20)>>.&mobius, (-1,  0, -1, 1,  1, 0, -1, 0, -1, 0);

sub mobius(\n)
{
    my @a = prime-factors(n);
    return 0 if @a.squish < @a;
    return @a %% 2 ?? 1 !! -1;
}
